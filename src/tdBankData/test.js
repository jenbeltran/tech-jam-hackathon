let org = require('./organizations.js');

let OrganizationInfo = org.organizationInfo();
console.log(OrganizationInfo[2].projects[0].getTxs());
