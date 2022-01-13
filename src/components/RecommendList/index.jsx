import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import {
  FaBook,
  FaListUl
} from "react-icons/fa"
const Wrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: row;
  @media (max-width: 768px) {
    padding: 0 10px;
  }

`
const Card = styled.div`
  margin: 0 5px;
  padding: 10px;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 5px;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  flex-basis: calc( 33.33% - 33px );

  &:hover {
    background-color: ${props => props.theme.colors.backgroundHover};
  }
  @media (max-width: 768px) {
    flex-basis: calc( 50% - 33px );
  }
`
const CardTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${props => props.theme.colors.text};
  word-break: break-all;

  & > a {
    text-decoration: none;
    color: inherit;
    transition: all 0.2s;
  }

  & > a:hover {
    color: ${props => props.theme.colors.secondaryText};
  }
`

const CardIcon = styled.div`
  margin-top: 10px;
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.text};
`

const Tag = styled.span`
  font-size: 11px;
  color: #D90467;
`

const recommends = [
  {
    title: "책 스터디",
    // tag: "추천!",
    link: "#",
    icon: <FaBook/>
  },
  {
    title: "시리즈",
    link: "/series",
    icon: <FaListUl/>
  }
]

const RecommendList =  () => {
  return (
    <Wrapper>
      {recommends.map(({title, link, icon, tag=""}, idx) => (
          <Card key={idx} style={idx == 0? {opacity: 0.3} : {}}>
            <Link to={link}>
              <CardTitle>
                    {title}  {tag && <Tag>{tag}</Tag>}
              </CardTitle>
              <CardIcon>
                {icon}
              </CardIcon>
            </Link>
          </Card>
      ))}

    </Wrapper>
  )
}      
export default RecommendList
