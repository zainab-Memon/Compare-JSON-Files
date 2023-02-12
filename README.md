# Compare-JSON-Files (https://comparejsonfiles.netlify.app/)
- The App takes two input values (json objects) and then compare both values and return either the objects are same or not. 
- If any of the keys and value are same, it will return those else it will display text **"BOTH FILES ARE DIFFERENT"**
**Note:** The project currently supports one object with singular key values. It does not support nested values in keys which includes objects and arrays.
## Example: When both inputs are same
- **Input1:** 
{
  "id": 1,
  "title": "zainab",
  "desc": "lorem ipsum"
}
- **Input1:** 
{
  "id": 1,
  "title": "zainab",
  "desc": "lorem ipsum"
}
-  **Output:**
![image](https://user-images.githubusercontent.com/88162824/218309634-90205132-c784-46a6-abf1-d2b01c99fa88.png)
## Example: When the inputs are slightly differnet
- **Input1:** 
{
  "id": 1,
  "title": "zainab",
  "desc": "lorem ipsum"
}
- **Input1:** 
{
  "id": 1,
  "title": "zanab",
  "desc": "lorem ipsum"
}
-  **Output:**
![image](https://user-images.githubusercontent.com/88162824/218309808-c5997798-4b63-41bc-8e6a-1bb90bcabaa2.png)
## Example: When the inputs are completely differnet
- **Input1:** 
{
  "id": 1,
  "title": "zainab",
  "desc": "lorem ipsum"
}
- **Input1:** 
{
  "ids": 2,
  "titles": "Ali",
  "descrip": "lorem ipsums"
}
-  **Output:**
![image](https://user-images.githubusercontent.com/88162824/218309862-149f6789-8643-4765-b7e5-297abf81cedb.png)
