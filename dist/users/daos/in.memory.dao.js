"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericInMemoryDao = void 0;
class GenericInMemoryDao {
    constructor() {
        this.users = [];
        console.log('Creating new instance of GenericInMemoryDao');
    }
    static getInstance() {
        if (!GenericInMemoryDao.instance) {
            GenericInMemoryDao.instance = new GenericInMemoryDao();
        }
        return GenericInMemoryDao.instance;
    }
    addUser(user) {
        return this.users.push(user);
    }
    getUsers() {
        return this.users;
    }
    getUserById(userId) {
        return this.users.find((user) => user.id === userId);
    }
    putUserById(user) {
        const objIndex = this.users.findIndex((obj) => obj.id === user.id);
        const updatedUsers = [...this.users.slice(0, objIndex), user, ...this.users.slice(objIndex + 1)];
        this.users = updatedUsers;
        return `${user.id} updated`;
    }
    patchUserById(user) {
        const objIndex = this.users.findIndex((obj) => obj.id === user.id);
        let currentUser = this.users[objIndex];
        for (let i in user) {
            if (i !== 'id') {
                currentUser[i] = user[i];
            }
        }
        this.users = [
            ...this.users.slice(0, objIndex),
            currentUser,
            ...this.users.slice(objIndex + 1),
        ];
        return `${user.id} patched`;
    }
    removeUserById(userId) {
        const objIndex = this.users.findIndex((obj) => obj.id === userId);
        this.users = this.users.splice(objIndex, 1);
        return `${userId} removed`;
    }
}
exports.GenericInMemoryDao = GenericInMemoryDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4ubWVtb3J5LmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL2Rhb3MvaW4ubWVtb3J5LmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLGtCQUFrQjtJQUkzQjtRQUZBLFVBQUssR0FBUSxFQUFFLENBQUM7UUFHWixPQUFPLENBQUMsR0FBRyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELE1BQU0sQ0FBQyxXQUFXO1FBQ2QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRTtZQUM5QixrQkFBa0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1NBQzFEO1FBQ0QsT0FBTyxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7SUFDdkMsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFTO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsUUFBUTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQWM7UUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsV0FBVyxDQUFFLElBQVM7UUFDbEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLE1BQU0sWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7UUFDMUIsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsYUFBYSxDQUFDLElBQVM7UUFDbkIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFpQixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqRixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDWixXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzVCO1NBQ0o7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDO1lBQ2hDLFdBQVc7WUFDWCxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7U0FDcEMsQ0FBQztRQUNGLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUM7SUFDaEMsQ0FBQztJQUNMLGNBQWMsQ0FBQyxNQUFjO1FBQ3JCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBaUIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QyxPQUFPLEdBQUcsTUFBTSxVQUFVLENBQUM7SUFDL0IsQ0FBQztDQUNKO0FBdERELGdEQXNEQyJ9