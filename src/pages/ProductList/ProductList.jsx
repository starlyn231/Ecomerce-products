import React from 'react'
import Announcement from '../../components/Announcement/Announcemnet'
import { Footer } from '../../components/footer/Footer'
import { Navbar } from '../../components/navbar/Navbar'
import { Newsletter } from '../../components/newsLestter/Newsletter'
import { Products } from '../../components/product/Products'
import { Container, Filter, FilterContainer, FilterText, Option, Select, Title } from './style/ProductList'

export const ProductList = () => {
  return (
    <Container>

      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />

    </Container>
  )
}
