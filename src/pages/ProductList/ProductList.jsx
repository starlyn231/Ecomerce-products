import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Announcement from '../../components/Announcement/Announcemnet'
import { Footer } from '../../components/footer/Footer'
import { Navbar } from '../../components/navbar/Navbar'
import { Newsletter } from '../../components/newsLestter/Newsletter'
import { Products } from '../../components/product/Products'
import { Container, Filter, FilterContainer, FilterText, Option, Select, Title } from './style/ProductList'

export const ProductList = () => {
  const location = useLocation();
  const cat = (location.pathname.split("/")[2]);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newItem');

  const handleFilters = (e) => {
    const value = e.target.value;

    setFilters({
      ...filters,
      [e.target.name]: value
    })
  }
  console.log(filters)
  return (
    <Container>

      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled >
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
            <Option>gray</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
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
          <Select onChange={(e) => setSort(e.target.value)}>

            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />

    </Container>
  )
}
