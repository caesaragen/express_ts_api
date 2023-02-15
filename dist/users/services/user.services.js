"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const in_memory_dao_1 = require("../daos/in.memory.dao");
class UsersService {
    constructor() {
        this.dao = in_memory_dao_1.GenericInMemoryDao.getInstance();
    }
    static getInstance() {
        if (!UsersService.instance) {
            UsersService.instance = new UsersService();
        }
        return UsersService.instance;
    }
    create(resource) {
        return this.dao.addUser(resource);
    }
    deleteById(resourceId) {
        return this.dao.removeUserById(resourceId);
    }
    ;
    list(limit, page) {
        return this.dao.getUsers();
    }
    ;
    patchById(resource) {
        return this.dao.patchUserById(resource);
    }
    ;
    readById(resourceId) {
        return this.dao.getUserById(resourceId);
    }
    ;
    updateById(resource) {
        return this.dao.putUserById(resource);
    }
    ;
}
exports.UsersService = UsersService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL3NlcnZpY2VzL3VzZXIuc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EseURBQXlEO0FBQ3pELE1BQWEsWUFBWTtJQUd6QjtRQUNRLElBQUksQ0FBQyxHQUFHLEdBQUcsa0NBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUNMLE1BQU0sQ0FBQyxXQUFXO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7WUFDeEIsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxZQUFZLENBQUMsUUFBUSxDQUFDO0lBQ2pDLENBQUM7SUFDTCxNQUFNLENBQUMsUUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNMLFVBQVUsQ0FBQyxVQUFlO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUFBLENBQUM7SUFDTixJQUFJLENBQUMsS0FBYSxFQUFFLElBQVk7UUFDeEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFBQSxDQUFDO0lBQ04sU0FBUyxDQUFDLFFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzNDLENBQUM7SUFBQSxDQUFDO0lBQ04sUUFBUSxDQUFDLFVBQWU7UUFDaEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQUEsQ0FBQztJQUNOLFVBQVUsQ0FBQyxRQUFhO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUFBLENBQUM7Q0FDTDtBQTlCRCxvQ0E4QkMifQ==