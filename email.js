/**
 * @param {string[]} emails
 * @return {string[]}
 */
function numUniqueEmails(emails) {
    const normalizedEmails = emails.map((email) => {
        const [ name, domain ] = email.split('@');
        const [ baseName ] = name.split('+');
        
        return `${baseName.replace(/\./g, '')}@${domain}`;
    });

    console.log(normalizedEmails);
    
    return new Set(normalizedEmails).size;
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]));
