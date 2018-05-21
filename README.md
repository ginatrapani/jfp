# jfp

Quick-and-dirty JSON file parser helps get exported [Journey](https://journey.cloud/) entries into [Day One](http://dayoneapp.com/).

*   Read a directory of .json files.
*   For each, write a corresponding text file containing the entry content, with the same name as the json file.
*   Write the [Day One cli command](http://help.dayoneapp.com/day-one-2-0/command-line-interface-cli) to the console, which will look something like: `dayone2 new -j Journey --date '2018-05-07 13:38:58 --t tag1 tag2 < data/filename.txt`

To run on sample data:
`node jfp.js data/`

Copy and paste the output CLI commands to run the import to Day One.
