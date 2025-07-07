# Layouts in Next.js

### If i want to just create a folder to group the route pages not want to use as path , then create like 
```
(admin)
    adminlogin
        page.js
```
- in the url you dont need ***admin/adminlogin*** you can just do ***/adminlogin***

### Har page ki alag alag Title meta data set kar sakte hai .
in the page.js write 
```
//Dynamic metadata
export async function generateMetadata({ params }) {
    return {
        title: "particular Title for perticular page "
    }
}
```