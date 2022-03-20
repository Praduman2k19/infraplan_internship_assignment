const SEARCH_DATA='SEARCH_DATA';

const searchdataitem = (data) =>
{
    console.log("searchdataitem",data);
    return{
        type : SEARCH_DATA,
        payload : data,
    };
};

export {searchdataitem};
