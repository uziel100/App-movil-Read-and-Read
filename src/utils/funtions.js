

export const sortArrayByDateAsc = ( arary ) => {
    return arary.sort( (a,b) => {
        return new Date(a.book.createdAt) - new Date(b.book.createdAt)
    })
}