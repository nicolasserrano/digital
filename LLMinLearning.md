 black
<h2>LLMs in Learning v1.1b</h2>

<div style="background-color: black;" class=""><img src="https://images.openai.com/blob/b11fba8c-c51f-41c1-95b8-cc55db89af49/gpt-4-motif.svg?width=10&amp;height=10&amp;quality=50" width="100%" height="400px" alt="GPT-4 Line Motif" loading="lazy" data-nuxt-img="" aria-hidden="false" class="w-full"></div>

???
Play: [https://www.nicolasserrano.com/r?https://www.nicolasserrano.com/digital/APIChatGPT.md](http://www.nicolasserrano.com/r?http://www.nicolasserrano.com/digital/APIChatGPT.md)

[Edit](https://github.com/nicolasserrano/digital/edit/master/APIChatGPT.md) v1.05

breakTitlesWith#  // to crate a new slide with each title defined with #

<button onclick="reloadIframes()">Reload Iframes</button>

Login in:
- [https://codex.tecnun.es](https://codex.tecnun.es/codex/ItemList)
- https://developer.marvel.com/signin
- https://auth0.openai.com/u/login/identifier?state=hKFo2SBZYnpsZWRNRUZVR0JQeE5IMFpNMXlRS0FEYkdHa1U3eKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHhZNVhyTzdhS2M1SVJOMWVjb2RzVFVkWnc4cWI5RklTo2NpZNkgRFJpdnNubTJNdTQyVDNLT3BxZHR3QjNOWXZpSFl6d0Q
- https://learn.deeplearning.ai/login
- Console: api_key =

Tools
https://jsonformatter.org/?utm_content=cmp-true

## Content
<pre>
- ChatGPT        2 min
- APIs           4 min
- Formats        5 min
- Open AI API    
  - Use          2 min
  - Tokens       2 min 30 s
  - Principles   2 min
- Examples
  - Excel        6 min
  - Brobwer      1 min 30 s
  - Jupyter      1 min 30 s
  - Codex        1 min 30 s
- Applications   2 min
                 ======  
         Total  30 min
</pre>

# Sede de ChatGPT
<div style="max-width:854px"><div style="position:relative;height:0;padding-bottom:56.25%"><a href="https://www.youtube.com/shorts/yx1suJcivws">Video de Marisa</a></div></div>

---

<iframe width="100%" height="100%" src="https://www.impromptubook.com/" allowfullscreen></iframe>
## Main quote

Or is technology’s ultimate goal to free oneself not from work,
but for work? To help us do less—or do more? Until now it has
always been the latter. I hope it continues to be the latter, not
just for a few of us, but for most of us.

--

<h3>To help us do less—or do more</h3>

## Students work
<table border=1 style="text-align: center;">
<tbody>
<tr>
<td width=30%>Students use it</td>
<td width=35%><img src="https://github.com/user-attachments/assets/70e4284c-7a69-4d7e-80a7-34085a2c3a53" width="150" alt="image"><BR>Do less</td>
<td width=35%><img src="https://github.com/user-attachments/assets/446fb270-d9c1-49ec-980b-f3564e254d3e" width="150" alt="image"><BR>Do more</td>
</tr>
<tr>
<td>Students don't use it</td>
<td><img src="https://github.com/user-attachments/assets/e2121bdc-e6f9-4860-bdf2-ed12c95fd4aa" width="200"><br>Han estado debajo de una roca</td>
 <td><img src="https://github.com/user-attachments/assets/597a0eb0-a35a-4997-8de1-cfd67889ba3b" width="100" alt="image"> <br>It does not exist</td>
</tr>
</tbody>
<tr>
<td></td>
<th>the teacher does <big>not</big> require it</th>
<th>the teacher requires it</th>
</tr>
</table>

???
 <td><img src="https://github.com/user-attachments/assets/4094952e-9629-4336-9d10-626168f79820" alt="image"> <br> No Existe</td>

## Students use
- First illusion
- Policies

---
background-image: url(https://github.com/user-attachments/assets/5a826abe-d2f3-489b-8672-d2d8bf223622)
background-size: contain


##  Horizon Europe


<p style="margin-left:48px; text-align:left"><span style="font-size:16.0pt"><span style="font-family:Arial"><span style="color:#004494">General disclaimer included in the latest version of the proposal templates</span></span></span></p>

<p style="margin-left:48px; text-align:left"><span style="font-size:14.0pt"><span style="font-family:Arial"><span style="color:#4d4d4d"><em>&quot;When considering the use of generative artificial intelligence (AI) tools for the preparation of the proposal, it is imperative to exercise caution and careful consideration. The AI-generated content should be thoroughly reviewed and validated by the applicants to ensure its appropriateness and accuracy, as well as its compliance with intellectual property regulations. </em></span></span></span><span style="font-size:14.0pt"><span style="font-family:Arial"><strong><span style="color:#9b59b6"><em>Applicants are fully responsible for the content of the proposal</em></span></strong><span style="color:#4d4d4d"><em> </em></span></span></span><span style="font-size:14.0pt"><span style="font-family:Arial"><span style="color:#4d4d4d"><em>(even those parts produced by the AI tool) and must be transparent in disclosing which AI tools were used and how they were utilised. </em></span></span></span></p>

<p style="margin-left:48px; text-align:left"><span style="font-size:14.0pt"><span style="font-family:Arial"><span style="color:#4d4d4d"><em>Specifically, </em></span></span></span><span style="font-size:14.0pt"><span style="font-family:Arial"><strong><span style="color:#9b59b6"><em>applicants are required</em></span></strong><span style="color:#4d4d4d"><em> </em></span></span></span><span style="font-size:14.0pt"><span style="font-family:Arial"><span style="color:#4d4d4d"><em>to:</em></span></span></span></p>

<div class="O1" style="margin-left:80px; margin-top:8px; text-align:left; text-indent:-0.38in"><span style="font-size:14.0pt"><span style="color:#931680"><span style="font-family:Arial">●</span></span></span><span style="font-size:14.0pt"><span style="font-family:Arial"><strong><span style="color:#9b59b6"><em>Verify the accuracy, validity, and appropriateness</em></span></strong><span style="color:#4d4d4d"><em> </em></span></span></span><span style="font-size:14.0pt"><span style="font-family:Arial"><span style="color:#4d4d4d"><em>of the content and any citations generated by the AI tool and correct any errors or inconsistencies. </em></span></span></span></div>

<div class="O1" style="margin-left:80px; margin-top:8px; text-align:left; text-indent:-0.38in"><span style="font-size:14.0pt"><span style="color:#931680"><span style="font-family:Arial">●</span></span></span><span style="color:#9b59b6"><strong><span style="font-size:14.0pt"><span style="font-family:Arial"><em>Provide a list of sources used to generate content and citations</em></span></span></strong></span><span style="font-size:14.0pt"><span style="font-family:Arial"><span style="color:#4d4d4d"><em>, including those generated by the AI tool. Double-check citations to ensure they are accurate and properly referenced. </em></span></span></span></div>

<div class="O1" style="margin-left:80px; margin-top:8px; text-align:left; text-indent:-0.38in"><span style="font-size:14.0pt"><span style="color:#931680"><span style="font-family:Arial">●</span></span></span><span style="font-size:14.0pt"><span style="font-family:Arial"><strong><span style="color:#9b59b6"><em>Be conscious of the potential for plagiarism</em></span></strong><span style="color:#4d4d4d"><em> </em></span></span></span><span style="font-size:14.0pt"><span style="font-family:Arial"><span style="color:#4d4d4d"><em>where the AI tool may have reproduced substantial text from other sources. Check the original sources to be sure you are not plagiarising someone else&rsquo;s work. </em></span></span></span></div>

<div class="O1" style="margin-left:80px; margin-top:8px; text-align:left; text-indent:-0.38in"><span style="font-size:14.0pt"><span style="color:#931680"><span style="font-family:Arial">●</span></span></span><span style="font-size:14.0pt"><span style="font-family:Arial"><strong><span style="color:#9b59b6"><em>Acknowledge the limitations of the AI tool</em></span></strong><span style="color:#4d4d4d"><em> </em></span></span></span><span style="font-size:14.0pt"><span style="font-family:Arial"><span style="color:#4d4d4d"><em>in the proposal preparation, including the potential for bias, errors, and gaps in knowledge&quot;.</em></span></span></span></div>


<p style="margin-left:48px; text-align:left"><span style="font-size:14.0pt"><span style="font-family:Arial"><span style="color:#4d4d4d">See </span></span></span><span style="font-size:14.0pt"><span style="font-family:Arial"><span style="color:#4d4d4d"><a href="https://research-and-innovation.ec.europa.eu/news/all-research-and-innovation-news/guidelines-responsible-use-generative-ai-research-developed-european-research-area-forum-2024-03-20_en&amp;pk_campaign=whatsnew_newsletter">&quot;Guidelines on the responsible use of generative AI&quot;</a></span></span></span><span style="font-size:14.0pt"><span style="font-family:Arial"><span style="color:#4d4d4d"> developed by European Research Area Forum to support the responsible use of generative AI.</span></span></span></p>




# To code or not to code




<table border="1" cellpadding="1" cellspacing="1">
	<tbody>
		<tr>
			<td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Andrew_Ng_at_TechCrunch_Disrupt_SF_2017.jpg/220px-Andrew_Ng_at_TechCrunch_Disrupt_SF_2017.jpg" style="height:180px; width:147px" /></td>
			<td><img alt="Nvidia CEO Jensen Huang" src="https://cdn.mos.cms.futurecdn.net/BWPBQYAy2DjS4ABFS4QZCT-320-80.jpg" style="height:180px; width:320px" /></td>
		</tr>
	</tbody>
</table>


<p><a href="https://www.tomshardware.com/tech-industry/artificial-intelligence/jensen-huang-advises-against-learning-to-code-leave-it-up-to-ai" rel="noopener noreferrer" tabindex="0">Nvidia CEO Jensen Huang</a> vs <a href="https://en.wikipedia.org/wiki/Andrew_Ng" rel="noopener noreferrer" tabindex="0">AI expert Andrew Ng</a></p>


---

<iframe width="100%" height="100%" src="https://hbr.org/2023/09/were-all-programmers-now" allowfullscreen></iframe>

---

## We Are All Programmers Now

https://hbr.org/2023/09/were-all-programmers-now

## Example of code:

https://chatgpt.com/share/672ba72f-b124-8004-9f3d-b8e31f425e89


https://chat.openai.com/
![](pres-images/ChatGPT/ChatGPT.png)
## ChatGPT Plus 
![image](https://github.com/nicolasserrano/digital/assets/13941127/c1605491-db27-4d85-ac44-1335f0d181a5)
## OpenAI API
[OpenAI API](https://platform.openai.com/overview) 
![image](https://github.com/nicolasserrano/digital/assets/13941127/51120153-c33a-4386-8726-f776dfda79a5)

## HTTP
![](//nicolasserrano.github.io/CS/images/digital_50.jpg)
## APIs
![image](https://github.com/nicolasserrano/digital/assets/13941127/9edcb4c0-ca8a-4968-8be9-7709d0b4ae73)
???
https://www.nbcnews.com/tech/tech-news/twitter-will-start-charging-developers-api-access-rcna68905
Otra noticia, sobre reddit: https://www.theverge.com/2023/4/18/23688463/reddit-developer-api-terms-change-monetization-ai
## APIs
http://www.nicolasserrano.com/CS/AJAX/bookForm2.html
<iframe style="display: block; margin: 0 auto;" data-fixed-url="1" src="https://www.nicolasserrano.com/CS/AJAX/bookForm2.html" height="520" width="1024" allowfullscreen="" ></iframe>
## APIs
https://developer.marvel.com/docs
<iframe style="display: block; margin: 0 auto;" src="https://developer.marvel.com" height="520" width="1024" allowfullscreen="" ></iframe>

## JSON
```
{
  "nombre": "Juan Pérez",
  "edad": 30
}
```
<video controls="" name="media"><source src="https://synthesia-results.s3.eu-west-1.amazonaws.com/website_demos/Avatars-Page/white-bkg/Jason.mp4" type="video/mp4"></video>
## JSON
http://www.nicolasserrano.com/CS/JSON
<iframe style="display: block; margin: 0 auto;" data-fixed-url="1" src="https://www.nicolasserrano.com/CS/JSON" height="420" width="1024" allowfullscreen="" ></iframe>
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
## JSON as Output format
Please provide the different selectors of CSS, with the name, syntax, brief explanation, and an example. Provide it in JSON format.

## Open AI API
- A way to make http calls to the Chat GPT
- [Billing and limits](https://platform.openai.com/account/billing/overview) - [Pricing](https://openai.com/pricing)
- [Playground](https://platform.openai.com/playground) - [Example](https://platform.openai.com/playground/p/default-playful-thank-you-note)

.width[![image](https://github.com/nicolasserrano/digital/assets/13941127/f7d76073-4704-41e3-b7aa-a661c44ca77a)]

## API usage
https://platform.openai.com/account/usage
.width[![image](https://github.com/nicolasserrano/digital/assets/13941127/0fd6c479-eef3-4985-a0c8-a6ce477ecfd5)]
## API parameters
https://platform.openai.com/docs/api-reference/chat
.width[![image](https://github.com/nicolasserrano/digital/assets/13941127/51b9f961-d1c3-43ed-b1f1-dbe0adc04cef)]
## API model
![image](https://github.com/nicolasserrano/digital/assets/13941127/1d70e380-3eef-4732-ab49-9c122e253444)


### Tokens  
https://platform.openai.com/tokenizer

--

- English use less tokens

--

- Tokens are english words

--

- You can set instructions in English and request output in another language

--

![image](https://github.com/nicolasserrano/digital/assets/13941127/666817d4-60e6-43bc-a96f-5df70f0d96fd)

???
Utiliar primer párrafo de la página de Tolenizer, o el siguiente texto:

English: 
The GPT family of models process text using tokens, which are common sequences of characters found in text. The models understand the statistical relationships between these tokens, and excel at producing the next token in a sequence of tokens.

Spanish:

La familia de modelos GPT procesa texto mediante tokens, que son secuencias comunes de caracteres que se encuentran en el texto. Los modelos comprenden las relaciones estadísticas entre estos tokens y sobresalen en la producción del siguiente token en una secuencia de tokens.

Example of the "Show example" translated:

Muchas palabras se asignan a un token, pero otras no: indivisible.

Los caracteres Unicode, como los emojis, pueden dividirse en varios tokens que contengan los bytes subyacentes: 🤚🏾.

Las secuencias de caracteres que se encuentran comúnmente unas junto a otras pueden agruparse: 1234567890

## Prompting Principles
<h3>Principle 1: Write clear and specific instructions
<h3>Principle 2: Give the model time to “think”

## Principle 1: Write clear and specific instructions
<h3>Tactic 1: Use delimiters to clearly indicate distinct parts of the input  
  
    Delimiters can be anything like: ```, """, < >, <tag> </tag>,
<h3>Tactic 2: Ask for a structured output
<h3>Tactic 3: Ask the model to check whether conditions are satisfied
<h3>Tactic 4: "Few-shot" prompting

## Principle 2: Give the model time to “think”
<h3>Tactic 1: Specify the steps required to complete a task
<h3>Tactic 2: Instruct the model to work out its own solution before rushing to a conclusion

## Other examples
<h3>Nasa-petal
https://github.com/nasa-petal/discord_bot
<h3>One Useful Thing of Ethan Mollick
https://www.oneusefulthing.org/i/138388046/structured-prompting
<h3>Empowering Learners.AI Keynote: Aneesha Bakharia</h3>
https://www.youtube.com/watch?v=QlchAKC_w8g&t=9s


## Excel example 1. Set the data

``` vbscript    
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

```  vbscript  
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

## Excel example 3. Parse JSON

``` vbscript
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
![image](https://github.com/nicolasserrano/digital/assets/13941127/7ee2de52-fd32-4d01-8b27-dfb2aefa0a28)

## Excel with roles
.width[![image](https://github.com/nicolasserrano/digital/assets/13941127/77addf75-54a3-4611-aa5c-45371e624db2)]

## JavaScript example
``` javascript
// API endpoint URL
const apiUrl = 'https://api.openai.com/v1/chat/completions';
// API parameters
const data = {
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'Who won the world series in 2020?' },
    { role: 'assistant', content: 'The Los Angeles Dodgers won the World Series in 2020.' },
    { role: 'user', content: 'Where was it played?' },
    { role: 'assistant', content: 'The 2020 World Series was played in Arlington, Texas at the Globe Life Field, which was the new home stadium for the Texas Rangers.' },
    { role: 'user', content: 'Who was the second one.' }
  ],
  model:'gpt-3.5-turbo'
};

// API request options
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + api_key // Replace with your OpenAI API key
  },
  body: JSON.stringify(data)
};

// Function to handle the API response
async function handleApiResponse() {
  try {
    const response = await fetch(apiUrl, requestOptions);
    const json = await response.json();
    console.log(json.choices[0].message.content); // Output the assistant's response
  } catch (error) {
    console.error('Error:', error);
  }
}

// Make the API call
handleApiResponse();
```
### Javascript console response:

Promise {<pending>}
The second place in the 2020 World Series was the Tampa Bay Rays.

## Jupyter Notebook example (Python)
[https://learn.deeplearning.ai/chatgpt-prompt-eng/lesson/2/guidelines](https://learn.deeplearning.ai/chatgpt-prompt-eng/lesson/2/guidelines)
.horizontal[![image](https://github.com/nicolasserrano/digital/assets/13941127/e0d31e15-dbe6-4ae5-a190-fe4b267aa4ed)]

## Example of use: Auto-GPT
[https://www.wired.com/story/fast-forward-chatgpt-my-new-chatbot-friend-get-things-done/](https://www.wired.com/story/fast-forward-chatgpt-my-new-chatbot-friend-get-things-done/)
![image](https://github.com/nicolasserrano/digital/assets/13941127/34ae8a79-2e94-472c-bd1d-b163f513ff1f)

???
https://github.com/Significant-Gravitas/Auto-GPT

---

.horizontal[![image](https://github.com/nicolasserrano/digital/assets/13941127/f9b2bd3c-9bec-4406-bc64-70975d49ca77)]

---

.horizontal[![image](https://github.com/nicolasserrano/digital/assets/13941127/c394107b-54f5-403d-9a14-741c667818b6)]

---

.horizontal[![image](https://github.com/nicolasserrano/digital/assets/13941127/7a56fdb8-c3ad-4c70-b5c9-847bb670ae91)]

## Applications / Suggestions
- Same prompt for a list of items
- Permanent assistant (server mode)
- Chatbot for existing application
- The Batch (Andrew Ng) about [LLM APIs](https://info.deeplearning.ai/ais-new-power-couple-movie-industry-limits-ai-youtube-goes-generative-more-web-data-more-bias-1)
- ![image](https://github.com/nicolasserrano/digital/assets/13941127/447f612b-3725-49fc-9d65-4f62ba0fc175)

## References
<span></span>
- [The Inside Story of ChatGPT’s Astonishing Potential | Greg Brockman | TED](https://www.youtube.com/watch?v=C_78DM8fG6E)  
- [DeepLearning.AI Short Courses](https://learn.deeplearning.ai/)  
- [How AI could save (not destroy) education](https://embed.ted.com/talks/lang/en/sal_khan_how_ai_could_save_not_destroy_education)  
- [Seminar HBSP: Unlocking the Power of AI: How Tools Like ChatGPT Can Make Teaching Easier and More Effective](https://hbsp.harvard.edu/webinars/unlocking-the-power-of-ai)  

## Questions
https://www.wooclap.com/

### The Inside Story of ChatGPT’s Astonishing Potential
<div style="max-width:854px"><div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://embed.ted.com/talks/lang/en/greg_brockman_the_inside_story_of_chatgpt_s_astonishing_potential" width="854" height="480" style="position:absolute;left:0;top:0;width:100%;height:100%" frameborder="0" scrolling="no" allowfullscreen></iframe></div></div>
 
### How AI could save (not destroy) education
Sal Khan • TED2023
<div style="max-width:854px"><div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://embed.ted.com/talks/lang/en/sal_khan_how_ai_could_save_not_destroy_education" width="854" height="480" style="position:absolute;left:0;top:0;width:100%;height:100%" frameborder="0" scrolling="no" allowfullscreen></iframe></div></div>
<div class="videoHolder" style="height: 403px;"><div class="videoDisplay"> 

## 
<iframe style="display: block; margin: 0 auto;" src="https://unav.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=1bb8b4d5-3526-4ec6-8e70-ac53010e490a&amp;autoplay=false&amp;offerviewer=true&amp;showtitle=true&amp;showbrand=false&amp;start=0&amp;interactivity=all" height="529" width="940" allowfullscreen="" allow="autoplay"></iframe>

### Una historia de ciencia ficción sobre AI, ¿o no?
<p align="center">
<img src="https://images-na.ssl-images-amazon.com/images/I/51PPlcfk6cL._SX311_BO1,204,203,200_.jpg">
</p>
???
[Vida 3.0](https://www.amazon.es/Vida-3-0-Historia-Max-Tegmark/dp/8430619623)

### The Inside Story of ChatGPT’s Astonishing Potential (YouTube)
Greg Brockman • TED2023
<div style="max-width:854px"><div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/C_78DM8fG6E" width="854" height="480" style="position:absolute;left:0;top:0;width:100%;height:100%" frameborder="0" scrolling="no" allowfullscreen></iframe></div></div>


### Questions
???
Pending:
Referencias a documentación y videos
