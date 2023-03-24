let data = {
    id : 1,
    name : "Leanne Graham",
    username : "Sincere@april.biz",
    address :
    {
        Street : "Kulas Light",
        suite : "Apy.556",
        city : "Gwenborough",
        zipcode : "92998-3874",
    },
    phone : "1-770-736-8031 x56442",
    website : "hildegard.org",
}

const { address: { Street, city } } = data;
console.log(`Street: ${Street}, city: ${city}`);
