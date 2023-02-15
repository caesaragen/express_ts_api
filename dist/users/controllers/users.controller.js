"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const user_services_1 = require("../services/user.services");
class UsersController {
    constructor() {
    }
    listUsers(req, res) {
        const usersService = user_services_1.UsersService.getInstance();
        const users = usersService.list(100, 0);
        res.status(200).send(users);
    }
    getUserById(req, res) {
        const usersService = user_services_1.UsersService.getInstance();
        const user = usersService.readById(req.params.userId);
        res.status(200).send(user);
    }
    createUser(req, res) {
        const usersService = user_services_1.UsersService.getInstance();
        const userId = usersService.create(req.body);
        res.status(201).send({ id: userId });
    }
    patch(req, res) {
        const usersService = user_services_1.UsersService.getInstance();
        usersService.patchById(req.body);
        res.status(204).send(``);
    }
    put(req, res) {
        const usersService = user_services_1.UsersService.getInstance();
        usersService.updateById(req.body);
        res.status(204).send(``);
    }
    removeUser(req, res) {
        const usersService = user_services_1.UsersService.getInstance();
        usersService.deleteById(req.params.userId);
        res.status(204).send(``);
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL2NvbnRyb2xsZXJzL3VzZXJzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsNkRBQXVEO0FBQ3ZELE1BQWEsZUFBZTtJQUN4QjtJQUNBLENBQUM7SUFDTCxTQUFTLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtRQUM3QyxNQUFNLFlBQVksR0FBRyw0QkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hELE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDTCxXQUFXLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtRQUMvQyxNQUFNLFlBQVksR0FBRyw0QkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hELE1BQU0sSUFBSSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0wsVUFBVSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7UUFDOUMsTUFBTSxZQUFZLEdBQUcsNEJBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoRCxNQUFNLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDTCxLQUFLLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtRQUN6QyxNQUFNLFlBQVksR0FBRyw0QkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hELFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDTCxHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtRQUN2QyxNQUFNLFlBQVksR0FBRyw0QkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hELFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDTCxVQUFVLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtRQUM5QyxNQUFNLFlBQVksR0FBRyw0QkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hELFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0o7QUFqQ0QsMENBaUNDIn0=