## i created filter by select functionality that used for redux

select options are very similar to buttons

# Note we return [All] on top so we don't have to create no functionality for that.

<!--
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
 -->

========bug===========fix
overFlow hidden =

overflow: hidden;
store product wrapper
