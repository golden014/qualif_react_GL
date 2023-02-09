import { gql } from "@apollo/client"

export const getAllFruit = gql`
    query allFruits {
        fruits {
        id
        scientific_name
        fruit_name
        description
        producing_countries {
            country
        }
        }
    }
`



