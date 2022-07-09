import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customFetchProducts from '../../utils/axios'
import { getUniqueValues } from '../../utils/helper'
import paginate from '../../utils/pagination'
const initialState = {
  allProducts: [],
  limitProducts: [],
  products: [],
  category: [],

  company: [],
  companyOriginal: [],
  isLoading: false,
  page: 0,
  sort: '',
  search: '',
  filterCategory: '',
  selectCompany: '',
  shipping: false,
}

export const getAllProductsThunk = createAsyncThunk(
  'product/getAllProductsThunk',
  async (_, thunkAPI) => {
    try {
      const resp = await customFetchProducts.get()
      return resp.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // =========pagination start here========
    changePageIndex: (state, { payload }) => {
      console.log(payload)
      state.page = payload
    },
    nextPageIndex: (state) => {
      let newPage = state.page + 1
      if (newPage > state.products.length - 1) {
        newPage = 0
      }
      state.page = newPage
    },
    prevPageIndex: (state) => {
      let newPage = state.page - 1
      if (newPage < 0) {
        newPage = state.products.length - 1
      }
      state.page = newPage
    },
    // ==========sort start here============
    getSortValues: (state, { payload }) => {
      const { name, value } = payload
      state[name] = value
      if (state.sort === 'price-lowest') {
        state.limitProducts = state.limitProducts.sort(
          (a, b) => a.price - b.price
        )
      }
      if (state.sort === 'price-highest') {
        state.limitProducts = state.limitProducts.sort(
          (a, b) => b.price - a.price
        )
      }
      if (state.sort === 'name-a') {
        state.limitProducts = state.limitProducts.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
      }
      if (state.sort === 'name-z') {
        state.limitProducts = state.limitProducts.sort((a, b) => {
          return b.name.localeCompare(a.name)
        })
      }
      // =================filter start here===============
    },

    //=========== search by name============
    getValuesFilter: (state, { payload }) => {
      const { name, value } = payload
      state[name] = value
      if (state.search.length > 0) {
        let filterProducts = [...state.limitProducts]
        let tempProducts = filterProducts.filter((item) =>
          item.name.startsWith(value)
        )
        state.limitProducts = tempProducts
        console.log('something in search')
        return
      } else {
        state.limitProducts = state.allProducts
      }
      // ==============Search by category ==============
      if (state.filterCategory.length > 0 && state.filterCategory === 'all') {
        return
      }
      if (state.filterCategory.length > 0) {
        let filterProducts = [...state.limitProducts]
        let tempProducts = filterProducts.filter(
          (item) => item.category === state.filterCategory
        )
        state.limitProducts = tempProducts
      }
      // =============== select options ===============
      if (state.selectCompany.length > 0 && state.selectCompany === 'all') {
        return
      }
      if (state.selectCompany.length > 0) {
        let tempCompany = [...state.limitProducts]
        let newCompany = tempCompany.filter((item) => {
          return item.company === state.selectCompany
        })
        state.limitProducts = newCompany
        console.log('company is in state')
      }
      // =============search by free shipping============
    },
    // ==========handle shipping click button======
    getShippingValue: (state) => {
      state.shipping = !state.shipping
      if (!state.shipping) {
        let tempProduct = [...state.allProducts]

        state.limitProducts = tempProduct
      }
      if (state.shipping) {
        let tempProduct = [...state.limitProducts]
        let newProduct = tempProduct.filter((item) => {
          return item.shipping === state.shipping
        })
        state.limitProducts = newProduct
      }
    },
    // ===========Clear filter===========
    clearFilterButton: (state) => {
      state.limitProducts = state.allProducts
      state.search = ''
      state.sort = ''
      state.filterCategory = ''
      state.selectCompany = ''
      state.shipping = false
    },
  },
  // =============Products fetch start here ===================
  extraReducers: {
    [getAllProductsThunk.pending]: (state) => {
      state.isLoading = true
    },
    [getAllProductsThunk.fulfilled]: (state, { payload }) => {
      state.allProducts = payload
      state.isLoading = false
      state.products = paginate(payload)
      state.limitProducts = state.products[state.page]
      state.category = getUniqueValues(payload, 'category')
      state.company = getUniqueValues(payload, 'company')
      state.companyOriginal = getUniqueValues(payload, 'company')
    },
    [getAllProductsThunk.rejected]: (state) => {
      state.isLoading = false
    },
  },
})
// ================ All actions starts here =============
export const {
  changePageIndex,
  nextPageIndex,
  prevPageIndex,
  getSortValues,
  getValuesFilter,
  getShippingValue,
  clearFilterButton,
} = productSlice.actions

export default productSlice.reducer
