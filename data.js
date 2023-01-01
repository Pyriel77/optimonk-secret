const secrets = [
  {
    hash: "1h7S4",
    secretText: "This my 1. secret",
    createdAt: Date.now(),
    expiresAt: Date.now() + 100000,
    remainingViews: 2,
  },
  {
    hash: "3rT43",
    secretText: "This my 2. secret",
    createdAt: Date.now(),
    expiresAt: Date.now() + 200000,
    remainingViews: 3,
  },
  {
    hash: "Kl29o",
    secretText: "This my 3. secret",
    createdAt: Date.now(),
    expiresAt: Date.now() + 300000,
    remainingViews: 7,
  },
  {
    hash: "ig01W",
    secretText: "This my 4. secret",
    createdAt: Date.now(),
    expiresAt: Date.now() + 400000,
    remainingViews: 22,
  },
];

module.exports = { secrets };
