import bcrypt from 'bcryptjs';

export async function hash(password: string) {
    return await new Promise((resolve, reject) => {
        bcrypt.hash(password, process.env.BCRYPTJS!, (err, hash) => {
            if (err) reject(err);
            resolve(hash);
        });
    })
}

export async function compare(password: string, hashed: string) {
    return await new Promise((resolve, reject) => {
        bcrypt.compare(password, hashed, function(err, hash) {
            if (err) reject(err);
            resolve(hash);
        });
    })
}