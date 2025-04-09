

const hre = require("hardhat");

async function main() {
    const DiplomaNFT = await hre.ethers.getContractFactory("DiplomaNFT");
    const diplomaNFT = await DiplomaNFT.deploy();

    await diplomaNFT.waitForDeployment(); // ✅ Corrección aquí

    console.log("Contrato desplegado en:", await diplomaNFT.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});