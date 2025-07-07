# SSR , SSG & ISR in Next.js 


### SSR = server side rendering . 
- This is default behaviour .
<hr>

### SSG = Static Side Generation
- Any content which does not have network calls is a static page by default . It means page ta statically generate hoye jabe ***pre rendered*** . 

<hr>

### ISG or ISR = Incrimental Static Generation or Regeneration 
<hr>

- In next.js fetch api bar bar call jay na , akbar call kore data peye gale seta cache memorie baniye save kore nay .
```
let data = await fetch('https://api.vercel.app/blog')
```
to avoid this , write like this ...
```
let data = await fetch('https://api.vercel.app/blog', { cache: 'no-store'})
```
or , do this to still stay in server side rendering .
```
export const dynamic = "force-dynamic" ;
```

<hr>

- Now ISR is , after a time revalidate hobe data .
```
fetch(`https://...`, { next: { revalidate: false | 0 | number-of-second } })
```
- certain number of second a data fetch hoye update hobe .

Fetch request are not cached when :
- Used inside a Server Action .
- Used inside a Router Handler that uses the Post method .