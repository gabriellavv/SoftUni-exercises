function isPetAvailable(pet, availableCount, vaccinated) {
    if (typeof pet !== "string" || typeof availableCount !== "number" ||typeof vaccinated !== "boolean") {
      throw new Error("Invalid input");
    }

    if (availableCount <= 0) {
      return `Sorry, there are no ${pet}(s) available for adoption at the agency.`;
    } else {
      if(vaccinated){
          return `Great! We have ${availableCount} vaccinated ${pet}(s) available for adoption at the agency.`;
      }else{
          return `Great! We have ${availableCount} ${pet}(s) available for adoption, but they need vaccination.`;
      }
      
    }
  }


  console.log(isPetAvailable("cat", 0, true));