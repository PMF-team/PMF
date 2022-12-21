// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract CryptoTreeToken is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    mapping(address=>bool) mintList;

    constructor() ERC721("CryptoTreeToken", "CTT") {}

    function canMint(address minter) private view returns(bool){
        return !(mintList[minter]);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https//:ipfws.net/id=\"token_id\"";
    }


    function safeMint(address to, string memory uri) public onlyOwner {
        require(canMint(to),"You can't mint more then one token!");
        uint256 tokenId = _tokenIdCounter.current();
        mintList[to]=true;
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }


    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}