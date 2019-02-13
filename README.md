# graphql-react-event-bookig

Create User graphql
"
mutation { createUser(userInput: { email: "test2test.com", password: "tester" }){\_id}}
"

Create an Events
"
mutation {
createEvent(eventInput:{title:"This is another test", description: "again description", price:39.99, date: "2019-02-13T15:16:05.921Z"})
{
title
}
}
"
