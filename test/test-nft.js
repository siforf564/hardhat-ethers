const { expect } = require("chai");

describe("Token contract basics", function () {
  let Token;
  let hardhatToken;
  let owner;
  let addr1;
  let addr2;
  let addrs;
  const tokenURI = "This.is.an.URI"

  before(async function () {
    // Get the ContractFactory and Signers here.
    Token = await ethers.getContractFactory("MyNFT");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    // Deploy our contract
    hardhatToken = await Token.deploy();
  });

  it("Can mint an NFT", async function () {
    await hardhatToken.mintNFT(addr1.address, tokenURI)
    expect(await hardhatToken.ownerOf(0)).to.equal(addr1.address);
    expect((await hardhatToken.totalSupply()).toString()).to.equal('1')
  });

  it("Can set a token URI", async function () {
    expect(await hardhatToken.tokenURI(0)).to.equal(tokenURI);
  });

  it("Can transfer the NFT", async function () {
    await hardhatToken.connect(addr1)['safeTransferFrom(address,address,uint256)'](addr1.address, addr2.address, 0);
    expect(await hardhatToken.ownerOf(0)).to.equal(addr2.address);
  });

  it("Can burn an NFT", async function () {
    await hardhatToken.connect(addr2).burn(0)
    expect(1).to.equal(1);
    expect((await hardhatToken.totalSupply()).toString()).to.equal('0')
  });


});