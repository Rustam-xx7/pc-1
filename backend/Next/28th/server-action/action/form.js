"use server"
import fs from "fs/promises"


export const submitAction = async (e) => {
    "use server";
    console.log(e.get("name"), e.get("add"));
    let a = await fs.writeFile("rustam.txt", `name is ${e.get("name")} and address is ${e.get("add")}`);
    
  }