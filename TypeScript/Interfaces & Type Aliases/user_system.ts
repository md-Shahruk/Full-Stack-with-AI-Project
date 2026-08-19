// MIN PROJECT: COMPLETE USER SYSTEM

// base user

interface User {
    readonly id: number;
    name: string;
    email: string;
    createdAt: Date;
    status: UserStatus;
}

// premium user

interface PremiumUser extends User {
    subscriptionTier: "basic" | "premium" | "enterprise";
    subscriptionEndDate: Date;
}

// admin user

interface AdminUser extends User {
      role: "admin" | "superadmin";
      permissions: string[];
}

// type for all possible user

type AnyUser = User | PremiumUser | AdminUser;

// type for user status

type UserStatus = "active" | "suspended" | "deleted";

// function using all these

function getUserInfo(user:AnyUser){
    let info = `Name:${user.name}, Email:${user.email}`;

    if('subscriptionTier' in user){
        info += `, Tier:${user.subscriptionTier}`;
       
    }

    if ('role' in user){
        info += `, Role:${user.role}`;
    }

    if('permissions' in user){
        info +=`, Permission:${user.permissions}`;
    }

    return info;
}

// usage

const regularUser: User = {
    id: 1,
    name: "Shahruk",
    email: "sha@gamil.com",
    createdAt: new Date(),
    status: "active",
}

const premiumUser: PremiumUser = {
    id: 2,
    name: "Shatil",
    email: "shatil@gmail.com",
    createdAt: new Date(),
    subscriptionTier: "premium",
    subscriptionEndDate: new Date("2026-09-12"),
    status: "active",
}

const admin: AdminUser = {
    id: 3,
    name: "Harun",
    email: "haru@gamil.com",
    createdAt: new Date(),
    permissions: ["Read", "Write", "Delete"],
    role: "admin",
    status: "active",
}


console.log(getUserInfo(admin));

