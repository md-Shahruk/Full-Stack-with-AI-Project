// Record creates a type for key-value pair

type Category = "Food" | "Transport" | "Education";
type CategoryTo = Record<Category, number>;

const monthly: CategoryTo = {
    Food: 500,
    Transport: 2500,
    Education: 5000
}

console.log(monthly.Food);

// but this show error

const monthlyy: CategoryTo = {
    Food: 500,
    Transport: 2500,
    Education: 5000,
    shopping: 2500 // Error
}