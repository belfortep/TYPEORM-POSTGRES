import { Request, Response } from "express"
import { User } from "../entities/User"

export const createUser = async (req: Request, res: Response) => {

    try {
        const { firstname, lastname } = req.body
        const user = new User();
        user.firstname = firstname;
        user.lastname = lastname;

        await user.save();

        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json(err)
    }

}


export const getUsers = async (req: Request, res: Response) => {

    try {

        const users = await User.find();

        return res.status(200).json(users);

    } catch (err) {
        return res.status(500).json(err);
    }

}

export const updateUser = async (req: Request, res: Response) => {

    try {

        const user = await User.findOneBy({ id: parseInt(req.params.id) });

        if (!user) return res.status(404).json({ message: 'User not found' });

        await User.update({ id: parseInt(req.params.id) }, req.body);

        return res.sendStatus(204);

    } catch (err) {
        return res.status(500).json(err);
    }

}

export const deleteUser = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;

        const result = await User.delete({ id: parseInt(id) });

        if (result.affected === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.sendStatus(204);

    } catch (err) {
        return res.status(500).json(err);
    }

}

export const getUser = async (req: Request, res: Response) => {
    try {

        const user = User.findOneBy({ id: parseInt(req.params.id) });

        return res.status(200).json(user);

    } catch (err) {
        return res.status(500).json(err);
    }
}
