# Task 1

## Json-server

I have used json-server to have a full fake REST API (https://www.npmjs.com/package/json-server).
Run 'npm run server' in the terminal to start the server with the data. I have a file called `db.json` where the data comes from. There is another file `backbg.json` which has the initial data(same as `db.json`) but it is not being used. I have writen the data myself so I kept a back up file if i needed to start my experiments all over again.

After starting the json-server run `ng serve` in another terminal to start the app.

## Info

I have implemented sorting, paging and filtering as you would see. In the id column the even number are displayed in red font and the odd - blue. In the department column, I have used different background color for the different departments. There is a toggle button that changes the visibility of the Id column. The edit button puts the user in `edit mode`, in which he/she can add or delete data. In order to see the newly created data after saving the changes, click on the last page (again) to refresh the data.
