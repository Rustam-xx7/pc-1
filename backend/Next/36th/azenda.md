# jsx styling in Next js

### If we want to create a separate style file 
- create ***styles/Home.module.css***
- Import and use it in page by adding class like 
```
className ={ style.box}
```
### Style jsx 
- we can create a spacific style for a spacific part . [ check the about part]

```
<div > // style for only this div
    <style jsx>
        .class{style}
    </style>
</div>
```

- to make it global add global
```
<div > // style for other div also
    <style jsx global>
        .class{style}
    </style>
</div>
```

