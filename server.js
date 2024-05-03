const Web3 = require('web3');

const app = require('express')();
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));

app.get('/balance', async (req, res) => {
    try {
        const accounts = await web3.eth.getAccounts();
        if (accounts.length === 0) {
            throw new Error("No accounts found. Ensure Ganache is running and the correct port is configured.");
        }
        const balance = await web3.eth.getBalance(accounts[0]);
        res.send(`Balance for account ${accounts[0]}: ${balance}`);
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).send(`Error retrieving balance: ${error.message}`);
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
