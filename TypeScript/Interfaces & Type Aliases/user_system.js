"use strict";
// MIN PROJECT: COMPLETE USER SYSTEM
// function using all these
function getUserInfo(user) {
    let info = `Name:${user.name}, Email:${user.email}`;
    if ('subscriptionTier' in user) {
        info += `, Tier:${user.subscriptionTier}`;
    }
    if ('role' in user) {
        info += `, Role:${user.role}`;
    }
    if ('permissions' in user) {
        info += `, Permission:${user.permissions}`;
    }
    return info;
}
// usage
const regularUser = {
    id: 1,
    name: "Shahruk",
    email: "sha@gamil.com",
    createdAt: new Date(),
    status: "active",
};
const premiumUser = {
    id: 2,
    name: "Shatil",
    email: "shatil@gmail.com",
    createdAt: new Date(),
    subscriptionTier: "premium",
    subscriptionEndDate: new Date("2026-09-12"),
    status: "active",
};
const admin = {
    id: 3,
    name: "Harun",
    email: "haru@gamil.com",
    createdAt: new Date(),
    permissions: ["Read", "Write", "Delete"],
    role: "admin",
    status: "active",
};
console.log(getUserInfo(admin));
