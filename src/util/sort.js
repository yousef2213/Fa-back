// Input: Array of object 
const sortByDate = (arr) => (sortKey, newer = true) => {
    const defaultSort = arr.sort((a,b) => a[sortKey] - b[sortKey])
   return newer ? defaultSort.reverse() : defaultSort;
}

export  {sortByDate}