# ChatGPT for engineers (ChatGPT API) v1.04
???
Play: [https://www.nicolasserrano.com/r?https://www.nicolasserrano.com/digital/APIChatGPT.md](http://www.nicolasserrano.com/r?http://www.nicolasserrano.com/digital/APIChatGPT.md)

<button onclick="reloadIframes()">Reload Iframes</button>
[Edit](https://github.com/nicolasserrano/digital/edit/master/APIChatGPT.md)
v0.01
breakTitlesWith#  // to crate a new slide with each title defined with #
Other referencies:

## Content
- ChatGPT
- APIs
- ChatGPT API
- API usage
- API parameters
- Excel example
- JavaScript example
- Colab example (Python)
- Codex example (Java)

## ChatGPT
https://chat.openai.com/
![](pres-images/ChatGPT/ChatGPT.png)
## HTTP
![](//nicolasserrano.github.io/CS/images/digital_50.jpg)
## APIs
http://www.nicolasserrano.com/CS/AJAX/bookForm2.html
<iframe style="display: block; margin: 0 auto;" src="//nicolasserrano.github.io/CS/AJAX/bookForm2.html" height="520" width="1024" allowfullscreen="" ></iframe>
## APIs
https://developer.marvel.com/docs
<iframe style="display: block; margin: 0 auto;" src="https://developer.marvel.com/docs" height="520" width="1024" allowfullscreen="" ></iframe>

## JSON
```
{
  "nombre": "Juan Pérez",
  "edad": 30
}
```
## JSON
http://www.nicolasserrano.com/CS/JSON
<iframe style="display: block; margin: 0 auto;" src="//nicolasserrano.github.io/CS/JSON" height="420" width="1024" allowfullscreen="" ></iframe>
## JSON
```
{
  "nombre": "Juan Pérez",
  "edad": 30,
  "ciudad": "Ciudad de México",
  "intereses": ["programación", "viajes", "lectura"],
  "educación": {
    "universidad": "Universidad Nacional Autónoma de México",
    "carrera": "Ingeniería de Software"
  },
  "experiencia_laboral": [
    {
      "puesto": "Desarrollador de software",
      "empresa": "ABC Software",
      "años": 3
    },
    {
      "puesto": "Analista de datos",
      "empresa": "XYZ Analytics",
      "años": 2
    }
  ]
}

```
## ChatGPT API
- A way to make http calls to the Chat GPT
- [Playground](https://platform.openai.com/playground)
- https://platform.openai.com/playground/p/default-playful-thank-you-note
## API usage
## API parameters
## Tokens
[Tokenizer](https://platform.openai.com/tokenizer)
English use less tokens
???
Example of the "Show example" and translated:
Muchas palabras se asignan a un token, pero otras no: indivisible.

Los caracteres Unicode, como los emojis, pueden dividirse en varios tokens que contengan los bytes subyacentes: 🤚🏾.

Las secuencias de caracteres que se encuentran comúnmente unas junto a otras pueden agruparse: 1234567890

## Excel example 1. Set the data

```    
    ' Set the data
    ' Set your OpenAI API key here
    apiKey = "sk-" + Range("Conf!A2")
    
    ' Set OpenAI API endpoint URL
    apiUrl = "https://api.openai.com/v1/chat/completions"
    max_tokens = 200
    
    jsonBody = "{""messages"": [{""role"": ""system"", ""content"": ""You are a helpful assistant.""}," & _
      "{""role"": ""user"", ""content"": """ & userInput & """}]," & _
      "  ""max_tokens"":" & max_tokens & ",""n"": 1, ""temperature"": 0, ""model"":""gpt-3.5-turbo""}"
    
    Range("E2").Value = jsonBody
```    
    
## Excel example 2. Call the API

```    
    ' Call API
    ' Create an HTTP object
    Set objHTTP = CreateObject("MSXML2.ServerXMLHTTP.6.0")
    
    ' Send the request to OpenAI API
    With objHTTP
        .Open "POST", apiUrl, False
        .setRequestHeader "Content-Type", "application/json"
        .setRequestHeader "Authorization", "Bearer " & apiKey
        .send jsonBody
        jsonResponse = .responseText
    End With
    Range("D2").Value = jsonResponse
```

## Excel example 3. Parse JSON)

```  
    ' Parse JSON
    Dim objResponse
    Set objResponse = ParseJSON(jsonResponse)
    Debug.Print ListPaths(objResponse)
    
    Dim totalTokens As String
    totalTokens = objResponse("obj.usage.total_tokens")
    Range("C2").Value = totalTokens
    
    response = objResponse("obj.choices(0).message.content")
    response = Replace(response, "\n", vbCrLf)
    GetOpenAIResponse = response
```  

## JavaScript example
## Colab example (Python)
## Codex example (Java)

## 
<iframe style="display: block; margin: 0 auto;" src="https://unav.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=1bb8b4d5-3526-4ec6-8e70-ac53010e490a&amp;autoplay=false&amp;offerviewer=true&amp;showtitle=true&amp;showbrand=false&amp;start=0&amp;interactivity=all" height="529" width="940" allowfullscreen="" allow="autoplay"></iframe>

### Una historia de ciencia ficción sobre AI, ¿o no?
<p align="center">
<img src="https://images-na.ssl-images-amazon.com/images/I/51PPlcfk6cL._SX311_BO1,204,203,200_.jpg">
???
[Vida 3.0](https://www.amazon.es/Vida-3-0-Historia-Max-Tegmark/dp/8430619623)

### How AI could save (not destroy) education
Sal Khan • TED2023
<div style="max-width:854px"><div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://embed.ted.com/talks/lang/en/sal_khan_how_ai_could_save_not_destroy_education" width="854" height="480" style="position:absolute;left:0;top:0;width:100%;height:100%" frameborder="0" scrolling="no" allowfullscreen></iframe></div></div>
### Questions
???
Pending:
Referencias a documentación y videos
