//Print the output in servicenow
gs.info("VS");
gs.print("Vri");


//basic func
var inc = new GlideRecord('incident');  //GlideRecord is main Oject and Incident is Table
inc.query();      // to fetch all the records
while (inc.next()) {
  gs.print(inc.number); //Printing all incidets
}


//to get the row count 
inc.getRowCount();


//addQuery()
inc.addQuery('priority=1');
//or
inc.addQuery('String', 'Operator', 'Value') //('priority','=','1'); // or ('priority','1')
//can also pass multiple queries in it, by adding multiple inc.addQuery() func in the code.
/*
  can be anything in the operator place
  =, !=, <=, >=, <, >, IN, NOT IN, STARTSWITH, ENDSWITH, CONTAINS, DOES NOT CONTAIN, INSTANCEOF
*/
var cat = ['software', 'hardware'];
inc.addQuery('category', 'IN', cat);
// Print where category is Software and Hardware


//or else pass addEncodedQuery()
inc.addEncodedQuery('active=true^ORcategory=software^priority=1');
//can also store the value in a variable and then pass it.
var a = 'active=true^ORcategory=software^priority=1';
inc.addEncodedQuery(a);


// Instead of use active=true this method directly we can use addActiveQuery
inc.addActiveQuery();
//active = false
inc.addInactiveQuery();


//to get the encodedQuery that we have given
gs.print(inc.getEncodedQuery());


//orderBy()
inc.orderBy('short_description');
//orderByDesc()
inc.orderByDesc('short_description');

//limit the number of records you want to fetch
inc.setLimit(10);

//similar to addQuery() only difference being that it returns only one record while addQuery returns more records.
inc.get('number', 'INC0009005');
inc.get('sys_id', 'eryggfjkdlkjsfsdgfhgrskgjkrdgkherkjg'); //('sys_id', gs.getUserID() )


//to get records between 0 and 5, including 0 but excluding 5
inc.chooseWindow(0, 5);

//to get the table name
inc.getTableName();

//to get the value
getValue('number') // e.g. INC0008001, INC0008002, so on
//to get display name
getDisplayValue('short_description');


//to check whether next record exists or not
inc.hasNext();

//to get the primary key of record(usually sys_id unless specified);
inc.getUniqueValue();

//This method is used to set the value of the specific field with the specified value. 
inc.setValue('short_description', 'Critical VPN Issue');


//This is used to get the specified column of the current record.  --> getElement()
//initialize()
//insert()
//newRecord() ke saath update chl jaata hai...as newRecord already has default values assigned to the fields. 
var elementName = 'short_description'
var inc = new GlideRecord('incident');
inc.initialize();
inc.setValue(elementName, 'I am facing VPN Problem');
inc.insert();
gs.print(inc.getElement('short_description')); //but the sysid sometimes....as in case of caller_id as it is a reference field.



//get table name
var inc = new GlideRecord('incident');
var grcn = inc.getRecordClassName();
gs.info(grcn);

//to check for a new record
var inc = new GlideRecord('incident');
inc.newRecord();
gs.info(inc.isNewRecord());

//the current table exists or not
var inc = new GlideRecord('incident');
gs.print(inc.isValid());

//if the specified field is defined in the current table
var inc = new GlideRecord('incident');
gs.print(inc.isValidField('category'));


//getLink() and getProperty() 
var inc = new GlideRecord('incident');
inc.addActiveQuery();
inc.addQuery('category', 'software');
inc.addQuery('priority=1');
inc.query();
while (inc.next()) {
  gs.print(gs.getProperty('glide.servlet.uri') + inc.getLink(false));
}


//tells whether the record exists or not isValidRecord()
var inc = new GlideRecord('incident');
inc.get('number', 'INC0000012 ');
gs.print(inc.number + ' exists:' + inc.isValidRecord());

//display all records where the value of the specified field is null. addNullQuery()
var inc = new GlideRecord('incident');
inc.addNullQuery('description');
inc.query();
while (inc.next()) {
  gs.print(inc.number);
}

//addNotNullQuery()
var inc = new GlideRecord('incident');
inc.addNotNullQuery('description');
inc.query();
while (inc.next()) {
  gs.print(inc.number);
}

//update()
var inc = new GlideRecord('incident');
inc.get('number', 'INC0000057');
inc.setValue('state', 2);
inc.update();

//updateMultiple()
var inc = new GlideRecord('incident');
inc.addQuery('category', 'hardware');
inc.setValue('category', 'software');
inc.updateMultiple();

//to delete specific record deleteRecord()
var inc = new GlideRecord('incident');
inc.get('number', 'INC0010013');// need to delete this record
inc.deleteRecord();

//to dlt multiple records
var inc = new GlideRecord('incident');
inc.addQuery('priority', 4);
inc.query();
inc.deleteMultiple();

/*Determines if the Access Control Rules, which
include the user's roles, permit create new records in this
table.*/
var inc = new GlideRecord('incident');
gs.print(inc.canCreate());

//Determines if the Access Control Rules, which
// include the user's roles, permit reading records in this
// table.
var inc = new GlideRecord('incident');
gs.print(inc.canRead());

// Determines if the Access Control Rules, which
// include the user's roles, permit editing records in this table.
var inc = new GlideRecord('incident');
gs.print(inc.canWrite());


// Determines if the Access Control Rules, which
// include the user's roles, permit deleting records in this
// table.
var inc = new GlideRecord('incident');
gs.print(inc.canDelete());

// setAbortAction()