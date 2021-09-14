/**
 * The number of unique emails in a given array
 * 
 * Unique emails will disregard any '.'s, and everything after the first
 * '+' is ignored.
 */
function numUniqueEmails(emails: string[]) {
    const normalizedEmails = emails.map((email) => {
        const [ name, domain ] = email.split('@');
        const [ baseName ] = name.split('+');
        
        return `${baseName.replace(/\./g, '')}@${domain}`;
    });
    
    return new Set(normalizedEmails).size;
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]));
