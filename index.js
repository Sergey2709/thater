const GENERAL_ADMISSION_TICKET_COST = 20;
const CHILD_AND_SENIOR_TICKET_COST = 10;
const MATINEE_DISCOUNT = 3;

function getBaseTicketCost(age) {
  if ((age && age >= 0 && age <= 12) || age >= 65) {
    return CHILD_AND_SENIOR_TICKET_COST;
  } else if (!age || age < 0) {
    alert("Your age is incorrect!");
    buyTicket();
  }

  return GENERAL_ADMISSION_TICKET_COST;
}

function applyMatineeDiscount(cost, isMatinee) {
  if (isMatinee === "yes" || isMatinee === "y") {
    return cost - MATINEE_DISCOUNT;
  }

  return cost;
}

function buyTicket() {
  const age = prompt("What is your age?");
  let cost = getBaseTicketCost(age);
  const isMatinee = prompt("Are you attending a matinee show?").toLowerCase();
  cost = applyMatineeDiscount(cost, isMatinee);

  alert("Your ticket will cost: $" + cost);
}