const RPC_URL = process.env.RPC_URL;
const contractList = ['0x66cEb38b6085Eb9B081adE9711EFA32232F2191F'];
const abiList = [
  '[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]',
];
console.log(contractList);
console.log(abiList);

const { ethers } = require('ethers');
const EthereumRpc = require('ethereum-rpc-promise');
let eth = new EthereumRpc(RPC_URL);
const ethereum = new ethers.providers.JsonRpcProvider(RPC_URL);

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
const InputDataDecoder = require('ethereum-input-data-decoder');
const log = require('fastify-cli/log');
const BigNumber = require('bignumber.js');

function selectRpcUrl(height) {
  // Memastikan height memiliki nilai yang valid
  if (typeof height !== 'number' || isNaN(height)) {
    throw new Error('Height harus merupakan sebuah angka.');
  }

  // Mendeteksi RPC_URL berdasarkan height % 5
  const rpcNumber = height % 10; // Ditambah 1 karena kita memiliki RPC_URL_1 hingga RPC_URL_5
  switch (rpcNumber) {
    case 0:
      return process.env.ENV_RPC_0;
    case 1:
      return process.env.ENV_RPC_1;
    case 2:
      return process.env.ENV_RPC_2;
    case 3:
      return process.env.ENV_RPC_3;
    case 4:
      return process.env.ENV_RPC_4;
    case 5:
      return process.env.ENV_RPC_5;
    case 6:
      return process.env.ENV_RPC_6;
    case 7:
      return process.env.ENV_RPC_7;
    case 8:
      return process.env.ENV_RPC_8;
    case 9:
      return process.env.ENV_RPC_9;
    default:
      throw new Error('Tidak dapat menemukan RPC_URL yang sesuai.');
  }
}

function isValidAddress(address) {
  try {
    ethers.utils.getAddress(address);
    return true;
  } catch (error) {
    return false;
  }
}
const createAccount = async () => {
  const wallet = await ethers.Wallet.createRandom();
  return {
    address: wallet.address,
    mnemonic: wallet.mnemonic,
    privateKey: wallet.privateKey,
  };
};

const getHeight = async () => {
  const height = await ethereum.getBlockNumber();
  return { height: height };
};

const getGasPrice = async () => {
  const gas = await ethereum.getGasPrice();
  return parseInt(gas);
};

const getBalance = async (request) => {
  const { address } = request.body;
  const balance = await eth.eth_getBalance(address, 'latest');
  return {
    balance: web3.utils
      .fromWei(balance, 'wei')
      .toLocaleString('fullwide', { useGrouping: false }),
  };
};

const getTokenBalance = async (request) => {
  const { address, contractAddress } = request.body;
  var sha3 = web3.utils.sha3('balanceOf(address)');
  const data = sha3.substr(0, 10) + web3.utils.padLeft(address.substr(2), 64);
  var balance = await eth.eth_call(
    {
      to: contractAddress,
      data: data,
    },
    'latest'
  );
  return {
    balance: web3.utils
      .hexToNumberString(balance)
      .toLocaleString('fullwide', { useGrouping: false }),
  };
};

const sendEther = async (request) => {
  const { amount, to, privKey, gasPrice, gasLimit } = request.body;
  const amount_send = (amount * 10 ** 18).toString();
  const wallet = new ethers.Wallet(privKey);
  const address = wallet.address;
  const rawTx = {
    from: address,
    to: to,
    value: web3.utils.toHex(amount_send),
    gasPrice: gasPrice,
    gasLimit: web3.utils.toHex(gasLimit),
  };
  // const rawTx = {
  //   from: address,
  //   to: to,
  //   gasLimit: web3.utils.toHex(gasLimit),
  //   value: ethers.utils.parseEther(amount),
  //   maxPriorityFeePerGas: ethers.utils.parseUnits('5', 'gwei'),
  //   maxFeePerGas: ethers.utils.parseUnits('20', 'gwei'),
  // };

  const account = web3.eth.accounts.privateKeyToAccount(privKey);
  const signedTx = await account.signTransaction(rawTx);
  const txInfo = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  return { hash: txInfo.transactionHash };
};

const sendToken = async (request) => {
  const { amount, to, privKey, gasPrice, gasLimit, contractAddress } =
    request.body;
  const wallet = new ethers.Wallet(privKey);
  const address = wallet.address;
  const amount_send = (amount * 10 ** 18).toString();
  // const weiAmount = ethers.utils.parseUnits(amount).toString();

  // var arrayIndex = contractList.findIndex(function (item) {
  //   return item.indexOf(contractAddress) !== -1;
  // });
  // return arrayIndex;
  var abi = abiList[0];
  var jsonABI = JSON.parse(abi);
  const contract = new web3.eth.Contract(jsonABI, contractAddress);
  const contractRawTx = await contract.methods
    .transfer(to, web3.utils.toHex(BigNumber(amount_send)))
    .encodeABI();
  const rawTx = {
    from: address.toLowerCase(),
    to: contractAddress.toLowerCase(),
    gasLimit: web3.utils.toHex(gasLimit),
    gasPrice: web3.utils.toHex(gasPrice),
    value: '0x00',
    data: contractRawTx,
  };
  const account = web3.eth.accounts.privateKeyToAccount(privKey);
  const signedTx = await account.signTransaction(rawTx);
  const txInfo = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  return { hash: txInfo.transactionHash };
};

const fetchBlock = async (request) => {
  const { height } = request.body;
  const selectedRpcUrl = selectRpcUrl(height);
  const gethConnect = new ethers.providers.JsonRpcProvider(selectedRpcUrl);
  console.log(`Fetching block from URL ${selectedRpcUrl}`);
  console.log(`Fetching block from ${height}`);
  var txs = [];

  const contract = ['transfer', 'transferFrom', 'mint', 'sendMultiSig'];
  const block = await gethConnect.getBlockWithTransactions(height);
  const transactions = block ? block.transactions : [];
  // const simpleTxs = transactions.map((tx) => {
  //   return {
  //     txid: tx.hash,
  //     from: tx.from,
  //     gasPrice: tx.gasPrice,
  //     gasLimit: tx.gasLimit,
  //     to: tx.to || '',
  //     value: tx.value,
  //     data: tx.data,
  //   };
  // });

  // const tokenTrx = simpleTxs.filter((tx) =>
  //   contractList.includes(tx.to.toLowerCase())
  // );
  // return tokenTrx;
  if (transactions.length) {
    for (const tx of transactions) {
      let dt;
      const txid = tx.hash;
      const from = tx.from;
      const gasPrice = tx.gasPrice;
      const gasLimit = tx.gasLimit;
      const to = tx.to || '';
      const value = tx.value;
      const data = tx.data;

      if (data === '0x' || parseInt(data, 16) === 0) {
        dt = {
          txid: txid,
          from: from,
          gasPrice: gasPrice.toLocaleString('fullwide', { useGrouping: false }),
          gasLimit: gasLimit.toLocaleString('fullwide', { useGrouping: false }),
          to: to,
          amount: value.toLocaleString('fullwide', { useGrouping: false }),
          contractAddress: '',
          type: 'Ether',
        };
      } else {
        const lowerContract = contractList.map((value) => value.toLowerCase());
        var isListed = lowerContract.includes(to.toLowerCase());
        if (isListed) {
          // var arrayIndex = contractList.findIndex(function (item) {
          //   return item.indexOf(to) !== -1;
          // });
          var abi = abiList[0];
          const decoder = new InputDataDecoder(abi);
          let result = decoder.decodeData(data);
          let toaddress = '0x' + result.inputs[0];
          const valid = isValidAddress(toaddress);
          if (valid && typeof result.inputs[1] !== 'string') {
            if (contract.includes(result.method)) {
              dt = {
                txid: txid,
                from: from,
                gasPrice: gasPrice.toLocaleString('fullwide', {
                  useGrouping: false,
                }),
                gasLimit: gasLimit.toLocaleString('fullwide', {
                  useGrouping: false,
                }),
                to: toaddress,
                amount: result.inputs[1].toLocaleString('fullwide', {
                  useGrouping: false,
                }),
                contractAddress: to,
                type: 'Smart Contract',
              };
            }
          }
        }
      }
      if (dt) txs.push(dt);
    }
  }

  return { transactions: txs };
};

module.exports = {
  createAccount,
  getHeight,
  getGasPrice,
  getBalance,
  getTokenBalance,
  sendEther,
  sendToken,
  fetchBlock,
};
