import { React, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'

const SingleProduct = () => {
  const [value, setValue] = useState(false)
  const { allProducts, isLoading } = useSelector((state) => state.products)
  const params = useParams()
  const { Id } = params

  // I'm using this to fix Refresh problem in useParams
  const fixRefresh = () => {
    setValue(true)
  }
  useEffect(() => {
    fixRefresh()
  }, [])
  if (isLoading) {
    return (
      <div>
        <h3 className='title'>Loading...</h3>
      </div>
    )
  } else {
    let tempProduct = allProducts.find((item) => item.id === Id)

    return (
      <>
        {value && (
          <Wrapper>
            <div className='container'>
              <div className='image-info-container'>
                <div className='img-container'>
                  <img className='img' src={tempProduct.image} alt='' />
                </div>
                <div className='info'>
                  <h4 className='title'>
                    <span>{tempProduct.name}</span>
                  </h4>

                  <p>
                    Category:
                    <span>{tempProduct.category}</span>
                  </p>
                  <p>
                    Company: <span>{tempProduct.company}</span>
                  </p>
                  <p>
                    Price: <span>{(tempProduct.price * 2) / 100} CAD $</span>
                  </p>
                  <p>
                    Shipping:{' '}
                    <span>{tempProduct.shipping ? 'Yes ' : 'No'}</span>
                  </p>
                  <p>
                    Colors in Stock:
                    {tempProduct.colors?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className='btn div-style'
                          style={{ backgroundColor: item }}
                        ></div>
                      )
                    })}
                  </p>
                </div>
              </div>
              <hr />
              <div className='description'>
                <h3 className='title'>description</h3>
                <div className='title-underline'></div>

                <div className='information'>
                  <p>{tempProduct.description}</p>
                </div>
              </div>
              <div className='contact'>
                <h4>have questions ? </h4>
                <p>
                  please reach us one of our team member would be please to help
                  you ASAP...
                </p>
                <button className='btn'>Reach us</button>
                <p>if click reach us we show contact us component</p>
              </div>
            </div>
            <Footer />
          </Wrapper>
        )}
      </>
    )
  }
}

const Wrapper = styled.section`
  margin-top: 2rem;

  @media (min-width: 768px) {
    margin-top: 0;
  }
  .image-info-container {
    display: grid;
    gap: 1rem;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  .img-container {
    max-width: var(--fixed-width);
    max-height: 25rem;
    margin: 0 auto;
    box-shadow: var(--shadow-3);
    overflow: hidden;
    border-radius: var(--radius);
    img {
    }
  }
  .info {
    background-color: var(--white);
    padding: 1rem;
    box-shadow: var(--shadow-2);
    border-radius: var(--radius);
    p {
      color: var(--grey-8);
      margin: 0;
      span {
        margin-left: 1rem;
        color: var(--grey-5);
      }
    }
  }
  .title {
    color: var(--primary-8);
  }
  .div-style {
    margin-left: 5px;
    border-radius: 40%;
  }
  .description {
    background-color: var(--white);
    padding: 1rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-2);
  }
  .information {
    p {
      text-align: center;
      margin: 1rem auto;
    }
  }
  .contact {
    background-color: var(--white);
    box-shadow: var(--shadow-2);
    text-align: center;
    p {
      margin: 0 auto;
    }
  }
`
export default SingleProduct
