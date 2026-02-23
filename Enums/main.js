// // 🔹 What is an enum?
// // An enum (short for enumeration) is a special TypeScript type used to define a set of named constants — like categories or modes.
// // Think of it like giving names to numbers or string values.
// enum Direction {
//     Up,     // 0
//     Down,   // 1
//     Left,   // 2
//     Right   // 3
// }
// let move: Direction = Direction.Up;
// console.log(move); // Output: 0
// enum Status {
//     Success = "SUCCESS",
//     Error = "ERROR",
//     Loading = "LOADING"
// }
// let currentStatus: Status = Status.Success;
// console.log(currentStatus); // Output: "SUCCESS"
// enum Role {
//     Admin,
//     User,
//     Guest
// }
// function checkAccess(role: Role) {
//     if (role === Role.Admin) {
//         console.log("Access granted.");
//     } else {
//         console.log("Access denied.");
//     }
// }
// checkAccess(Role.User); // Output: Access denied.
var TraficcLight;
(function (TraficcLight) {
    TraficcLight["Stop"] = "Red";
    TraficcLight["GetReady"] = "Yellow";
    TraficcLight["Go"] = "Green";
})(TraficcLight || (TraficcLight = {}));
var getAction = function (light) {
    if (TraficcLight.Stop === light) {
        return TraficcLight.Stop;
    }
    else if (TraficcLight.GetReady === light) {
        return TraficcLight.GetReady;
    }
    else {
        return TraficcLight.Go;
    }
};
console.log(getAction(TraficcLight.GetReady));
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Full Access";
    UserRole["Editor"] = "Edit Access";
    UserRole["Viewer"] = "Read Only Access";
})(UserRole || (UserRole = {}));
var getPermissions = function (role) {
    if (role === UserRole.Admin) {
        return UserRole.Admin;
    }
    else if (role === UserRole.Editor) {
        return UserRole.Editor;
    }
    else {
        return UserRole.Viewer;
    }
};
console.log(getPermissions(UserRole.Editor));
