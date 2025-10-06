// All component types go in here

//destination card prop types
export interface DestinationProps {
    name: string,
    img: string,
    color: string,
    distance: string
}

//btn prop types
export interface BtnProps {
    name: string,
    isAlt: boolean
}

//navbar prop types
export interface NavProps{
    isSearch: boolean,
    isListing: boolean,
}

//tag prop types
export interface TagProps{
    name: string,
    hasIcon: boolean,
}