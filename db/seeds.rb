# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


@category = ["Starters", "Main Dish"]
30.times do
    Food.create(
        name: Faker::Food.dish,
        description: Faker::Food.description,
        price: Faker::Commerce.price.to_i,
        category: @category.sample,
        menu: "Lunch"
    )
end;

10.times do
    Food.create(
        name: Faker::Dessert.variety,
        description: Faker::Dessert.flavor,
        price: Faker::Commerce.price.to_i,
        category: "Dessert",
        menu: "Lunch"
    )
end;

30.times do
    Food.create(
        name: Faker::Food.dish,
        description: Faker::Food.description,
        price: Faker::Commerce.price.to_i,
        category: @category.sample,
        menu: "Dinner"
    )
end;

10.times do
    Food.create(
        name: Faker::Dessert.variety,
        description: Faker::Dessert.flavor,
        price: Faker::Commerce.price.to_i,
        category: "Dessert",
        menu: "Dinner"
    )
end;

puts("seed successful")