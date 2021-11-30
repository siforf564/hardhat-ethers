const { expect } = require("chai");

describe("Token contract", function () {
  let Token;
  let hardhatToken;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    Token = await ethers.getContractFactory("MyNFT");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    // Deploy our contract
    hardhatToken = await Token.deploy();
  });

  it("Can mint an NFT", async function () {
    await hardhatToken.mintNFT(owner.address, "")
    expect(await hardhatToken.ownerOf(1)).to.equal(owner.address);
  });
});