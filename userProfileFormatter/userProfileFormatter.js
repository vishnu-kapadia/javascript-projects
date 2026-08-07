function getDisplayName(user) {
  return `${user.firstName} ${user.lastName}`;
}

function getLocation(user) {
  return `${user.address.city}, ${user.address.country}`;
}

function getContactSummary(user) {
  return {
    email: user.email,
    phone: user.phone,
  };
}

function isAccountActive(user) {
  return user.account.status === 'active';
}

function createProfileSummary(user) {
  return {
    displayName: getDisplayName(user),
    location: getLocation(user),
    contact: getContactSummary(user),
    active: isAccountActive(user),
    plan: user.account.plan,
  };
}

const user = {
  id: 16,
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@example.com',
  phone: null,
  address: {
    city: 'Chicago',
    country: 'USA',
  },
  account: {
    status: 'active',
    plan: 'pro',
  },
};

console.log(createProfileSummary(user));
console.log(getDisplayName(user));
console.log(isAccountActive(user));
console.log(getContactSummary(user));
