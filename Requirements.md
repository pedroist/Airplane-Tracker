# S64 Fullstack Programming Challenge

This programming challenge is part of the interview process for S64 Technology. If you do well in this challenge,
you’ll be asked for a face-to-face interview which will discuss the result of this challenge and ask you to make 
adjustments to it. Although you are allowed to consult standard reference material (e.g. google, stackoverflow), 
ensure that your submission is your own work, and you can explain it.

We do not police the time you take on this challenge, but out of respect for your time, we aim that it is possible to
create a good solution within 2 hours. If you find you are taking significantly longer than this, you may be 
polishing your submission beyond what we require.

Having said that, we are not only looking for submissions that achieve the specified requirements, we will be 
considering your attention to detail and *how* you achieve the requirements too.

This challenge is not intended to have any ‘gotcha’s or tricks. In general, if a requirement is not specified, you 
can use your own experience to decide what assumptions you will make. Include in your answer submission a list of the
assumptions you made.  If you have a problem with the requirements that you don’t feel able to resolve yourself then 
you can email me at adam.iley@s64capital.com.

Given the constraints, it is not necessary to make your submission beautifully styled.

Once the task is complete, please zip it up and send it via email to adam.iley@s64capital.com.

Please do not share your solution with others or make it publicly visible, e.g. on github.

## Task

We have a dataset that we wish to show to the user in a paginated table on a web page.

The dataset in this case is a point in time representation of airplanes in the air.  You should find an sqlite file 
that contains the data in the attached zip file under S64-Interview-Challenge/backend/src/data/planes.sqlite.

Please show the data with 30 rows per page.  The grid should have the following columns:
·	ICAO24 code (column icao24 in the planes table)
·	Callsign (column callsign in the planes table)
·	Origin Country (column originCountry in the planes table)
·	Velocity (column velocity in the planes table)
·	Latitude (column latitude in the planes table)
·	Longitude (column longitude in the planes table)

There should be ‘next page’ and ‘previous page’ controls, but additional controls are not required.

## Requirements

Your solution should include these parts in a solution zip file:

1. a working backend that provides the data to the front end
    1. There should be a bash script `run_backend.sh` that installs any dependencies and runs the backend. You can assume that npm and node are installed.
    2.	You should include at least one test for the backend that can be run with `test_backend.sh`
2. a working front end using react and typescript
    1.	There should be a bash script `run_frontend.sh` that installs any dependencies and runs the front end. You can assume that npm and node are installed.
    2.	You should include at least one test for the front end that can be run with `test_frontend.sh`
3. a document with at least these sections
    1. Your name and contact details
    2. Any assumptions you made
    3. Any differences between what you have submitted and what you would do in a real production system.  Please note that 'I would do X better' is too vague to attract a lot of credit. Try to give enough detail to show that you have thought about the ways in which X could be better.
    4. What other tests you would expect to be written for a real system.

Notes:

Your submission will be evaluated on an ARM hardware Apple Mac.  You can prepare the submission on any environment 
that you like, but you should not include any parts that are platform specific and would not run on the evaluation 
system.  The reviewer will not be able to spend a lot of time resolving setup issues, so you should do your best to 
ensure that everything installs and runs without problem.

Your submission must have at least one test for the front end and at least one test for the backend. It is not 
required that you create a comprehensive test suite, but you should give us enough to get a sense for how 
you would go about the testing.  Include in the submission document any other testing that should be done that you
didn’t get chance to cover. Submissions without any tests will not be considered.

You should follow what you consider to be best practice for "clean" code and API design.  Write the code that you
would write for a real system. Where this is not possible due to time constraints, please make sure you write about 
the gap in your document.

You may use tooling and libraries from npm.

## Recommendations

We have provided an example structure for you to help you get started quickly. You don't have to use it if you think 
a different approach is better, but whatever you produce must meet the requirements above. You should also use 
typescript and react as part of your front end solution.

The data is supplied in the backend/src/data/planes.sqlite file. The sqlite3 library on npm can read this file and 
provide you with an sql interface to it.