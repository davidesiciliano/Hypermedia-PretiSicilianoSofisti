# Documentation of the Backend part
> Deliverable D1
## General group information
| Member n. | Role          | First name        | Last Name | Matricola | Email address                             |
|-----------|---------------|-------------------|-----------|-----------|-------------------------------------------|
| 1         | administrator | Davide Giuseppe   | Siciliano | 912876    | davidegiuseppe.siciliano@mail.polimi.it   |
| 2         | member        | Matteo            | Preti     | 919984    | matteo.preti@mail.polimi.it               |
| 3         | member        | Giorgio           | Sofisti   | 920067    | giorgio.sofisti@mail.polimi.it            |

## Links to other deliverables
- Deliverable D0: the web application is accessible at [this
address](https://hyp-preti-siciliano-sofisti.herokuapp.com).
- Deliverable D2: the YAML or JSON file containing the specification
of the app API can be found at [this
address](https://hyp-preti-siciliano-sofisti.herokuapp.com/backend/spec.yaml).
- Deliverable D3: the SwaggerUI page of the same API is available at
[this address](https://hyp-preti-siciliano-sofisti.herokuapp.com/backend/swaggerui).
- Deliverable D4: the source code of D0 is available as a zip file at
[this address](https://hyp-preti-siciliano-sofisti.herokuapp.com/backend/app.zip).
- Deliverable D5: the address of the online source control repository
is available [this address](https://github.com/davidesiciliano/Hypermedia-PretiSicilianoSofisti). We hereby
declare that this is a private repository and, upon request, we will
give access to the instructors.

## Specification
### Web Architecture
We've developed our web application creating a clear separation between the presentation layer, and the application layer:
- The application layer is handled by the browser that requests page assets, sends HTTP requests, and then finally renders the
  results on the client-side
- The application layer is composed by a frontend server and a backend server. The backend server is responsible of the communication
  with the data layer to perform SQL queries on the relational database requested through the exposed API. The frontend server 
  invokes this API to get the data needed in the pages and to perform actions on data generated bt user interaction on the pages. 
  
At [this address](https://app.diagrams.net/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Hypermedia%20Diagrams#R7Vtbc%2BI2FP41PLZjW74%2BBlg2s0tmSEln26eOggV4VlisLAL011fCsrEll6sN3k14SCxZHMvf9x2dowsd0FtsPlO4nD%2BREOGOZYSbDuh3LMs0TY%2F%2FEzXbtMb1grRiRqNQNtpXjKN%2Fkaw0ZO0qClFSasgIwSxalisnJI7RhJXqIKVkXW42Jbj81CWcIa1iPIFYr%2F0WhWyevZcb7G88omg2l4%2F2LfnCC5g1lm%2BSzGFI1oUq8KkDepQQll4tNj2EBXgZLsPuV%2Br0N%2F%2BMnsbGV5P%2BwMMp%2FS01NjjnK%2FkrUBSzek2D1PQbxCuJV1dAjqh8ZbbNcKRkFYdI2DI7oLueRwyNl3Ai7q65cnjdnC2wvC2tIsrQRqHhyDuYObBckYgsEKNb%2Fj1pxbIlF1KMViDL6wK1GV%2FzAquurINSTbPc9B4xfiFBOwNAWwNwQEnMUBx2RD9czDvQfeVwujNxNUb0ra3g2q0D19HVCSffd9j%2BTMC6rQPW1YDtQwZfYYLaiaDfOgQ9DcEDyBnHkZtGGPcIJpSXYxLzRt2EUfIdZZUdC4jPYNDk8GqUYTY9Hea8TRFmYDaFs%2F8r4myfgLN9W5yDXxFnv316zgwXgB5RlPC3hCwiMb8zhNuKQMaRYWWEy3BKjCtghziaxbw44c%2FghkFX4BzxBPlB3lhEYSgeU0lpmfQpT21kim%2F6TQ5EZpk4u2q89yuIsxrjzdR4e1guMcfxg7b9uOY5R2mznJvSpk9wRKbzwZccH4%2FzZQY35UufT%2F1ZNRvlc%2FGluFwt8MOEkSLeQ%2FiK8Igk0c4xQf%2BVMEYWvAEWN8QEYrZDuxCIprtPBWeMKGGNrBiOYi6HbLHCOBjYKnRyK26D4xkzuGXCbJ6QYfCZ3YNY8hFuhGGSRBMlqVCw4%2FjQ7V%2BChd%2BtrPj3ruj4ZlbR30ia0tK2WBohGvHXE%2F5azeRg0A9cN6cJhdpi0ykkWQaDdIYOtfOrySywVTVuZnUUYR6H3sp9q6JQPmFEIt7rXCtAyZOAo5hIyIpOkPxWcY1JMeQAXzFklQ2lOGiGOOtwW2i2FA2SMzocGAf7ZfsH2%2FOLtAd7eeccXK54S0%2F1rlf8JmIFwfNSqnfge7K8l7sobAsFVewF73HK3gN8uxbvCby%2B4XnXe08qv2Pec4KXeff0MttUvUwZa0%2F1MttVDBmKoZq8TPWaDIj%2F65fqlUr7hrxMT8zr9LLAL%2FmZjCuX%2BpnX7ihVm5%2FdNZppfmbX5Gd5DlWznzlZbnRiNHPvEs2sBvyskL8FvhKDgktcY%2B%2B5ruK5l0TI9ge0D0c7x9HyvevsOXZwsF%2BqYyrtG3I0fcmiTkez2x2Cjio%2BuKfiPaumFM43b6N4rcNHQot%2Fl9CiL%2FpcrfiGhu57CU%2FlRdPLqcJTBdGU8LQOH5k7aP26ydxBP2BQ51BrKtNqEU4uGGubHlHvOik2lZ19AC5cegLKgifwTxN2bVrSz1Rcr6U8mzVtp5TN2o51djZ7pY6O5qz31ZGn0K8uZJ%2BqI02Q6lZw0zrST5Z8SXY7jH%2BgZElicURHPfz0%2BPI05A%2Frjcf875exprv27WrtM8X6dz60ZagstNxt89jST7FonL5ryhw1%2BldRdtONY0vfrnpeoV2fOWcrnOY%2B75gyTz2SV0VZ1ZG8xijLtjMLlI2f%2BbhoPCNp%2FR2zBcps2Yats1W1H9wcW%2Fq6%2FePLy2jnXz9WKGHvnDGnfYxZH4wdzDvUQ2tVjNn1MNYRPzPIfniSpp77n%2B%2BAT%2F8B) can be found a diagram of the architecture

AAAAAAAA
Describe here, with a diagram, the components of your web application
and how they interact. Highlight which parts belong to the application
layer, data layer or presentation layer. How did you ensure that HTML is
not rendered server side?
### API
#### REST compliance
We used the REST principles to create an API that allows client and server to be scalable and independent.
The API allows us to retrieve the information in different ways: considering the Event table as example, 
we can get all the tuples of the tables using the path /v2/events/, otherwise if we need a specific event we can get it 
using the path /v2/events/{eventId}  

AAAAA (---> poi non ho idea di cosa scrivere)
Describe here to what extent did you follow REST principles and what are
the reasons for which you might have decided to diverge. Note, you must
not describe the whole API here, just the design decisions.
#### OpenAPI Resource models
We created a resource model for each entity of the website: these are Activity, Contact, Event, FAQ, Farm, Person.
In these models all the properties are mandatory, and the primary key is always the ID that allows to retrieve the right 
element when needed.

We have also a resource model for the helpUsForm that a person can compile and send to the organization. This is done 
by performing a POST to the database that creates a new tuple for each form.

AAAAA
Describe here synthetically, which models you have introduced for
resources.
### Data model
The ER diagram of the data model is available at [this address](https://app.diagrams.net/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Hypermedia%20Diagrams#R7V1bc5s6EP41fbSH%2B%2BUxdtqmaXKaNkmb5MWDjWzTYHAFvqS%2F%2FggMNiBBsC1uHWU6HSODLKRvP61Wu6sP4nCx%2FQyN5fzWNYH9QeDM7Qfx8oMgqJqA%2Fg8K3nYFkirvCmbQMndF%2FKHg3voLokIuKl1ZJvBSN%2Fqua%2FvWMl04cR0HTPxUmQGhu0nfNnXt9K8ujRnACu4nho2X%2FrJMf74r1QT1UH4FrNk8%2FmVe0XffLIz45uhNvLlhuptEkfjxgziEruvvPi22Q2AHfRf3y9WbceNB8HD97dV6ddSf2kj51ttV9umYR%2FavAIHj061ail52bdirqMO%2BTacAetEr%2B29xP6K3XwYf4dxdjFdoUAZLAK0F8AE8lN4digabueWD%2B6UxCZ7aIGyhsrm%2FsNEVjz4atjVz0OcJeqfw%2FpIvGXXGGkAfbBNDHL30Z%2BCiBsA3dEv0rSSKu0ciAPNqNJ6bAxz4eIznCSgoUZkRIXC2r%2FrQy%2BhD1NFHdLqiYJ2OdTdwzIsA%2FejKcR2Q7jvorhwTBD%2FBoSvPh%2B4rGLq2C8NnRS78Q9%2BgnoRvT8FtfY4T4oLnsEAQ9LjgchvVtLt6S14lRnRXuLX8XY26LkTXuwolXY%2BuD%2FUFF2%2BJi2xtx425567gBJRAs2%2FAGSiqMBJ%2BYKa4A4cQBLbhW%2Bs0lZDwED1651roRfbQk2OoRdATuAykdm8UPZWU3UxFCpeuiNczFe3eGKsohOf%2Bfc5ArIohFuHw4j8MthB41l9jHF5yZIGHOwkbBBJsIZ6%2BiMrHru%2B7i%2FKgiKUomjiiHz3QdXmGiMb1zMHm%2Bqqe%2FNP09JD1RYVL%2FonpH3CnUw9UM3ha7XSTphr5HaKhzAK8XJIFYrqomgZEPj0DaSeygKQW11M1CeC6QvMkoLWLBHqC2E%2BxgK6khkyW6pJ6Pm58Yrh%2BBC%2BHBDlQwf9dBU%2BUm1bw%2BJhh69TweDRJp2iX46T3NLxImeNTipxcrMaRtELaDL5fKb6ryIn1ULgmpDEmnUjhspapRy7H4QgpxlvitmVwg5ffXkVKK4yillocog%2B7GilTjojBnmt6htjLYlumCCEz4lVOAbjaXjUNHaf5nUJAp3PNdDS9vr4evIydmfY4vR3b15zVE0oyzZ6TKtcWVSklupjOUJZr9CzXVEM1Uka7jdubq8Vm7q%2BJmvBFUKS8KnZAM2OIPs38Pb6aIiu1XWTV4xWhrwnJZW1q8HpqbWyGq1SfDLjARsvbWAvbCIls6jr%2BffRNMHCTuWWbN8abuwrGwPONyWt8NZi70PqL7jfioUVfQz8yZwtK6o774MmozhAc4C4eWD5TdGtsUzfeGJ4ft8a1bWPpWbshDh5cIIG0nEGEmfAmTIkO32nXKl6qUKlWMlKqEHRqhaBTC1nLFDWlGtct0O15ixjUIb5l2D8CGXJmwbcD311GnWqDaTwIkeCGn2NhTUn27l5MsBeWaYa1Ti3bjmfEaP700JLIcmY3u18RpUPRj%2BjXgiIXVTm1w3l3jioDTjjd%2BoafYJqIetGbyQP0D%2FXsMJgdZfSmQ3TNH67Rv%2BB26A9dB03ThhWiASC0bUCAuIEJ3eVDPMdxGeGQM8ASygNLKA2seHpQygFJrApHEoaju69n42icFFoCJsrCKY0datB5Dx3Ba0bAPxEHYg4O8qYyHB8JQIh14kHG8DBF88rIMRagGnrh3sdDWFnHuaUGLpFLcknMOfR38jDsNM0kO%2BR0lkbkHAhQoxEaUAAfr%2Fyh4cpjSXy62Xy%2F%2FrpyngnqqbtxAGQ80gEeiX1c6uARInhw3ZbxSFkeKZTG7vEIh0HBQytPf2QCbwKtpW%2B5DqOTdtMJz2kN8wm%2B9cf45Cw%2ByTO%2FtYpPilydElCYuIulDXzAKKVDlCJKDS91SjgRMUo5BgNqDgbaTym4H5CB%2BtTL9xlmJNIOEiltxK8KOTyu3TIWOYtF9BwQtIpFiCoVboefuC40LcfwAaOStlOJVqPplQgf3GzPmOSsJY6Ug4FWMYnI%2FZ5tfwtT%2Frt4L27dxez57oFgMnGXwEFdPvKtBeOStnOJwNdofiUCiJlLTueSIok8w4upKa0E39GbGbYNopoZi7SXRcSmja4lnG0ZixyjkSg5GGiVRkJe5%2BIzSuhUYi1mjEdaziNK05bWWB1iRELLSLIXxw4yiYgvdL94u4b7xiRw1Z6igczDR%2BeC%2BUQ943dMslnWG8wnlfDOoB3Mtw%2BceY7qaE8Uzdf7G0UeAQU8PH7WXtba8%2FfBKp6q34%2BiieFcdRSNIGRjpTNVlI2iEdUcQNIOo5HJDa42LEbCrbBc4xF7scC1JghGyAbw8%2F1mUjnwUs5sYDlr116Hod1W%2FmZ%2B52aD%2FZDHIWxC87NBbdk09pl25CSvF7J6YgaREAGmYjF17d1ozDpCuyVCdg5iYKZU00SRDXTKQqf0RJFJQyDoal%2FVzpwr6BMIvnnfAsJvWRYPXuT6WjpxR0%2BvguSdz8OvcDUa3MzejN%2BD%2F1aSaD33eFzfvDL%2BpYRscZDr3l2yPk4ndzg%2Bqf5THZ7RYGWZb7jDBXzH7pw59NR1E%2BWpTZPwma0Qb1VPbXlL6WNntuwUKet6P84IRz%2F3FBkxuEE1CN%2FnMdhUM20Vorgts1ZGV%2BazyQapzFibzc2PzXL86dcN%2F%2FH%2By9Xrkz3%2BRNiAJw9OAPgbYwzsd4gwNzw2O7q4IbH2setxfUHTJTp6R1BXehCVPq9UMIzkThGo0vLp9FrImu%2FSK1cPu4pSJr2KglhRwTO%2FHZ0iijuu3qqZF9dGm2deodXMKwh9KWUfEmqTYLrGiXoNy4WLoXcty0I9Ui9nzbQZPehUKceUbVqJ4DJKoMQVNit7u0I3NxMZtOS8os0yTMssEhmG4fqimGIYLgPD6ihGpLt2o0wXXEkdIaaVqumCz%2BZgOzX3b118wYtFfFENAYgtXNyJLVvc9QRV6gv6QeD51DCJfBWLvd9D58%2BtMbhbQ%2BXi8e5b7%2BLP6FeZQMATVIxjdjlO54ziPenWZJvNZonVsjlDy7KGKr1TUUWb1%2FEL0KINIhCbVRuKZKNx0tirCbJa%2BUb11u%2FdiPbl5Pbu0l47z8OV0Lso41F%2FioF3b9E9Lr1smlz4WsmFtN9JNh%2FXZBXOnkYgZTM2lj6OICP0giifYqg4lmv2xx5EP6sKdB1liHjGLWN17poWiVjjXBMPS3pTr5epoEKfGHz37mKCXsTyCTEbLDksFbeczGKEj5efyR3FWEyTO4r7sFH6fjl44A5LD9t8elg%2BL6Efjq2C%2FLAkKFWWD5TH43hYglgKPviVR%2FNUhwh8ycuyOtYeyXM8lZDSw5KopLrgDXyJ2jSRdD2SR8sBQasieXq%2FJlDhhRfoP%2Bk%2FPcn4ZQgawUmC5V%2FrDpeQUsRWxSVE%2BLAcBadTSaE8tppJyFvdhByxwYJ0ZBo%2B00raziTE7LC1qiUEZ0rGJWepJblGt1aRSdH5ZwksAMdkTNIJJiElha2KSYjgYXnrTyeSImlsd%2BKkonC9ZFLYyArPsp50gUtIeRZq5RKW0JEyl0hd4JJCP5sEFj6uQbRtzPbzKj%2FsUVII1g5iDiRRqwoC%2BHzC9vOa38%2FbS2Z3zntU8YmF7edROL6g8nzB1SEC9xVg%2B3m166jHU0njxz2qLMUnbRbpbo5PFfcKYFazDrBInYc9kpvMvAJos0gnvAJyUpPiaJi7K8hOLWg7j9R6ymNOomB2nBL1TMGdOFBp8zB7VrXLq8Wl9aLdT3sP8OmW4CFiuxODeRd1gUvqPN6RCB58G5gxSVkmKZLGDlrfNXxW8RaGbbPzYrvEKI2f9agxLyPKyomWxx2t0k1y9Cp2DvW%2FwSt1HvyYAyV2FDX1VU8nDqP%2B%2FApmL44HLjevFx6vK1%2F%2B%2FFgTwipA4CrAnI46QCa1nvxIRA%2FTUU6nkiJxbPeypyh1WAIKw%2FiIpSwimNcRDa%2BjTPoQUS1JBnvDK%2F1E8BgEmM9RrT5HhYLZSpcjcvZIDEfM4%2BioqaVIOqubWirDA%2B7OChaGZTP9tCr9lA6P1OlvRGwx7gPbNIt0RzstEsQOaqe4E%2Btyjkbsv9VijJQ2RiStJpI6XY6ILcYdXhmRnEUkcheIpPCUoqRyCqBHMr2zZW4Fy1wl3sV5d5lbWa48DZ9M2Dq3%2BdgaLS%2BiohULXXKT8YmFrXQpbPTmhe%2B2P7ZGw%2Fd5WWxN7Vsxx1NJ47E1GtvVpc0indjUJTcdd4r3VpARSQeIpPHwmjidPSMSakTSCZ%2F4r%2Fc3ijwCCnh4%2FKy9rLXn74MVwfABXZuRSNtJpNbYGiJwWKTv6SRSJInttpjZP3r2N3%2FD%2F10PX7YT9Umb3ikscW%2B3qaTO0BoifpiP2elUUiiQrVZHiOeDxf6OyW280PjO3FW7QCV1xtSQ8cMSbp7OJcUS2W4yufxyPReEx0tzZA1vx39%2BPm1HBC%2BzK2AvH71PLlzgqGCbeVVkylPlkpQg8lXBAKcEtplX62ZeoXC2ci%2BP2GKCXwDbyjtqfimSzlbv5BFbjjsJMPt7lUoqHRqpcx%2BP2GLmakaZQSr3BagMCrgNlW3idYJE6tzDI7aY%2BQJQJpFOuAIQW457Aowt6M9HpkE43pnRSJtopNZdPGKTeeYLQJlIOuEKQMYCbigxTBMCj6XabDuP1LmFR8YOi8SjzCN85YaR6sBASGVl%2BUwbaTuL1Lp7RwQOW9bQZpHurmt4QkQvdNeWM2HmkbYzSZ058MjgYVZW2kzSXTMr4TjnMDfAyGHJATrAJrUmwSM3WcAAxNjkLDYR8hxL2s8mhPNIWLKiLtCI2LSxlZ1GQl0p6YS1dTnyL3%2Ff23%2Fs3lr%2B%2Bf03mDk%2FDYJzoveKho%2FZWttOI0qNtlYicpiL8%2BksUiiKrSYRMnpxLLDQq%2B5Qid60wVVg2za0Fzad2LbRBza6wXp5HM1mY%2B%2F6efPCvxLCOMPj0YCJCr%2Fkkwmcu4vxygt6D0ALNSWIN4hL7w5Fg83c8sE9GsbgqQ00gnGe%2B4s4cAILWcB7nFKIQjavNinhmEDo%2BVg0qfd8iRkdOOYFhCHWIzlKdB10V44JzAjyYGv5T8HnvhxdPSe%2BudwmL96ii%2BP62nNXcALehxIwZ6BwRCCwDd9aJ28id2%2F06F0gzYeRFFUuPZJ6ZoR2DY2eOgwSVpGaiVoR5UxFfjg%2FYBWFo71%2Fn9MBgNMwGpSL%2FzAUhMFACXYjiE80Z2O8GtMyYaiLMHlGOHqa%2Fc4caoHr87ye%2BFNTAxZLTFyhO516oJKhwnel6MsqXyiraNzg2%2B4hJYwwCwtCGe9zHB8XHB4Or1JPJ2i5QvH3Y6Uqr774QJSqeWKfUjJCi5SNCTmVJ6TslFAxT%2BC7Wmi4L3gMgTXyxPmJXmnzhKClxggJRUZjokIOZAHh8BH6dPEd151YsGkFmWN1vuR6isoBKTkAwH2fWLRp86ljD4LZynjTnDbj7lAs4pTCYX5c5U5RFWIC3338s0I9w8x9dadHOYFSGs8hy7N4D%2Fps0ok9yBw44J5RhuNtmE9U%2B7mk8TSyPCFXF%2BOSM48ZbqNbFLqErusnV8rQWM5vXRMEd%2FwP)

The tables represented in the ER diagram are mapped into the resource models, with the addition of tables for the 
relationship many-to-many, in particular we have added the tables:
-  IsInvolvedIn: define the relationship between person and activity.
-  Offers: define the relationship between farm and activity.
-  RelatedTo: define the relationship between event and activity.

AAAAAA
Describe with an ER diagram the model used in the data layer of your web
application. How these map to the OpenAPI data model?

## Implementation
### Tools used
The backend application is a Node.js application that uses the code generated by Swagger codegen tool to create the 
middleware part pointing at the routes defined in the OpenAPI specification. In order to handle the routing of the 
deliverables we used the framework Express.js.

We used PostgreSQL as our relational database, using pgAdmin to populate and set it up.
As intermediate layer between the Node.js application and the database we used Knex.js, an SQL query builder designed 
to be flexible and portable.

The cloud platform used to deploy our application is Heroku. After the initial connection with the GitHub repository, 
it allows to perform automatic deployment at every push on the specified deploy branch.
Heroku allows also to use the free PostgreSQL add-on to creates a flexible datastore accessible by the application 
using the environment variable DATABASE_URL modified by Heroku itself when necessary.

AAAAAAA
Describe here which tools, languages and frameworks did you use for the
backend of the application.
### Discussion
We used Swagger codegen tool to create controllers and services that use the node package swagger-middleware to point
to the routes we defined in our OpenAPI specification and use our resource models.

Thanks to the separation between the backend and the frontend, our application is well partitioned. The backend server 
is the only one that interacts with the database and that provides a RESTful API to operate on it, while the frontend application 
acts as a server for the browser (so for the user) to show and render pages and as a client for the backend to request REST resources. 

We used a relational database to manage the data model, we did not define any trigger mechanism because our data model is
static and does not have any "runtime" modification.

AAAAAA

Describe here:
- How did you make sure your web application adheres to the provided
OpenAPI specification? Which method did you use to test all APIs
endpoints against the expected response?
- Why do you think your web application adheres to common practices to
partition a REST-based web application (static assets vs.
application data)
- Describe synthetically why and how did you manage session state,
what are the state change triggering actions (e.g., POST to login
etc..).
- Which technology did you use (relational or a no-SQL database) for
managing the data model?

## Other information
### Task assignment
We decided to organize weekly meetings, in which we checked the progress of the previous week and organized for the 
following week dividing equally the remaining work, in this way everybody could understand what was going on in every 
part of the project. However, every time a member has a problem with his part, we organized an extra meeting to fully 
understand the problem and resolve it together.
We started analysing the C-IDM, L-IDM, ER and Logic Design schemas realized together for the Design Document, 
from which we started to plan the work relying on the extrapolated main topics.

Matteo and Giorgio worked mainly on the frontend, while Davide worked mainly on the backend.

During the weekly meeting we also reviewed together the already developed part, checking if it was coherent with the 
design choices made before.
In the last week we realized together all the documents to be delivered.
Thanks to this strategy the workload has been spread equally and each group member is aware of the work made by the other two.

AAAAA
Describe here how development tasks have been subdivided among members
of the group, e.g.:
> - Foo worked on front end (80%) and OpenAPI Spec (20% of the time)
> - Bar worked on ....
### Analysis of existing API
To follow in the right way the principles of REST APIs we used as initial inspiration the code seen during the 
lessons and adapted it for our purposes.

AAAAA
Describe here the research of (full or part of) existing APIs that are similar
in objectives and scope to the one implemented, that have possibly guided
implementation choices (these should not be necessarily OpenAPI
implementations). Toy APIs (such as the Swagger's Pet Store) or the example
shown during lectures are not a valid response.
Use TWO or more items of the form:
> We took (full/partial) inspiration from API <XYZ>(link) for the part of the
> API that manages <ABC> because of <REASON>.
Or
> For the part of the API that manages <ABC> we considered/studied <XYZ>(link)
> because of <REASON> but wasn't completely fitting to our purpose because of
> <REASON>.
>
### Learning outcome
Davide learned how to configure and interact with a relational database, and how to render dynamically the 
HTML using the data retrieved from the database

Matteo learned how to write reusable, clean and adaptive web code with dynamic effects

Giorgio learned how to make a fully responsive website dealing with different screen sizes and resolution developing dynamic and reusable components

AAAAA
What was the most important thing all the members have learned while
developing this part of the project, what questions remained unanswered,
how you will use what you've learned in your everyday life?
Examples:
- Foo learned to write SQL queries and Javascript but wanted to know
more about caching, he's probably going to create his own startup
with what she has learned
- Bar learned how to deploy on a cloud platform, he would have liked
to know more about promises for asynchronous code..
