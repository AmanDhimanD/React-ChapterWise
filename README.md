* React Bootstrap 
## Step to use React bootstrap in react file with Routers 

### Steps
- Install React Bootstrap 
```
  npm install react-bootstrap bootstrap
```
- Add these Links into the index.html page 
* path --  public -> index.js
```
<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin>
</script>
<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin>
</script>
<script>var Alert = ReactBootstrap.Alert;</script>

```
and also add this CSS link in the Index.html page
```
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/>
```
