// // // components/UserForm/UserForm.tsx
// // import { useEffect, useState } from 'react';
// // import { TextField, Button, Box } from '@mui/material';
// // import { v4 as uuidv4 } from 'uuid';

// // interface UserData {
// //     id: string;
// //     name: string;
// //     address: string;
// //     email: string;
// //     phone: string;
// // }

// // const UserForm = () => {
// //     const [formData, setFormData] = useState<UserData>(() => {
// //         const saved = localStorage.getItem('userData');
// //         return saved ? JSON.parse(saved) : { id: uuidv4(), name: '', address: '', email: '', phone: '' };
// //     });

// //     const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

// //     useEffect(() => {
// //         const handleBeforeUnload = (e: BeforeUnloadEvent) => {
// //             if (hasUnsavedChanges) {
// //                 e.preventDefault();
// //                 e.returnValue = '';
// //             }
// //         };

// //         window.addEventListener('beforeunload', handleBeforeUnload);
// //         return () => window.removeEventListener('beforeunload', handleBeforeUnload);
// //     }, [hasUnsavedChanges]);

// //     const handleSubmit = () => {
// //         localStorage.setItem('userData', JSON.stringify(formData));
// //         setHasUnsavedChanges(false);
// //     };

// //     return (
// //         <Box component="form" onSubmit={handleSubmit}>
// //             <TextField
// //                 label="Name"
// //                 value={formData.name}
// //                 onChange={(e) => {
// //                     setFormData({ ...formData, name: e.target.value });
// //                     setHasUnsavedChanges(true);
// //                 }}
// //             />
// //             {/* Add other fields similarly */}
// //             <Button type="submit">Save</Button>
// //         </Box>
// //     );
// // };

// // export default UserForm;


// // // components/UserForm/UserForm.tsx
// // import { useEffect, useState } from 'react';
// // import { TextField, Button, Box } from '@mui/material';
// // import { v4 as uuidv4 } from 'uuid';

// // interface UserData {
// //     id: string;
// //     name: string;
// //     address: string;
// //     email: string;
// //     phone: string;
// // }

// // const UserForm = () => {
// //     const [formData, setFormData] = useState<UserData>(() => {
// //         const saved = localStorage.getItem('userData');
// //         return saved ? JSON.parse(saved) : { id: uuidv4(), name: '', address: '', email: '', phone: '' };
// //     });

// //     const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

// //     useEffect(() => {
// //         const handleBeforeUnload = (e: BeforeUnloadEvent) => {
// //             if (hasUnsavedChanges) {
// //                 e.preventDefault();
// //                 e.returnValue = ''; // This will show a confirmation prompt before leaving
// //             }
// //         };

// //         window.addEventListener('beforeunload', handleBeforeUnload);

// //         return () => {
// //             window.removeEventListener('beforeunload', handleBeforeUnload);
// //         };
// //     }, [hasUnsavedChanges]);

// //     const handleSubmit = (e: React.FormEvent) => {
// //         e.preventDefault(); // Prevents the page from reloading
// //         localStorage.setItem('userData', JSON.stringify(formData));
// //         setHasUnsavedChanges(false);
// //     };

// //     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //         const { name, value } = e.target;
// //         setFormData((prevData) => ({
// //             ...prevData,
// //             [name]: value,
// //         }));
// //         setHasUnsavedChanges(true);
// //     };

// //     return (
// //         <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
// //             <TextField
// //                 label="Name"
// //                 name="name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 required
// //             />
// //             <TextField
// //                 label="Address"
// //                 name="address"
// //                 value={formData.address}
// //                 onChange={handleChange}
// //                 required
// //             />
// //             <TextField
// //                 label="Email"
// //                 name="email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 required
// //                 type="email"
// //             />
// //             <TextField
// //                 label="Phone"
// //                 name="phone"
// //                 value={formData.phone}
// //                 onChange={handleChange}
// //                 required
// //                 type="tel"
// //             />
// //             <Button type="submit" variant="contained" color="primary" disabled={!hasUnsavedChanges}>
// //                 Save
// //             </Button>
// //         </Box>
// //     );
// // };

// // export default UserForm;


// import { useEffect, useState } from 'react';
// import { TextField, Button, Box, Typography } from '@mui/material';
// import { v4 as uuidv4 } from 'uuid';

// interface UserData {
//     id: string;
//     name: string;
//     address: string;
//     email: string;
//     phone: string;
// }

// const UserForm = () => {
//     const [formData, setFormData] = useState<UserData>(() => {
//         const saved = localStorage.getItem('userData');
//         return saved ? JSON.parse(saved) : { id: uuidv4(), name: '', address: '', email: '', phone: '' };
//     });

//     const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

//     // Handle unsaved changes warning on browser close
//     useEffect(() => {
//         const handleBeforeUnload = (e: BeforeUnloadEvent) => {
//             if (hasUnsavedChanges) {
//                 e.preventDefault();
//                 e.returnValue = ''; // This shows a prompt asking the user if they are sure about leaving
//             }
//         };

//         window.addEventListener('beforeunload', handleBeforeUnload);
//         return () => {
//             window.removeEventListener('beforeunload', handleBeforeUnload);
//         };
//     }, [hasUnsavedChanges]);

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault(); // Prevents page reload on form submission
//         localStorage.setItem('userData', JSON.stringify(formData)); // Save user data to local storage
//         setHasUnsavedChanges(false); // Reset the unsaved changes flag
//     };

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//         setHasUnsavedChanges(true); // Mark as having unsaved changes
//     };

//     return (
//         <Box
//             component="form"
//             onSubmit={handleSubmit}
//             sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: 2,
//                 maxWidth: '400px',
//                 margin: '0 auto',
//                 padding: 3,
//                 borderRadius: '8px',
//                 boxShadow: 3,
//                 backgroundColor: '#fff',
//             }}
//         >
//             <Typography variant="h5" gutterBottom align="center">
//                 User Data Form
//             </Typography>

//             <TextField
//                 label="Name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 fullWidth
//             />
//             <TextField
//                 label="Address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//                 fullWidth
//             />
//             <TextField
//                 label="Email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 type="email"
//                 fullWidth
//             />
//             <TextField
//                 label="Phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 type="tel"
//                 fullWidth
//                 inputProps={{ maxLength: 10 }}
//             />

//             <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 disabled={!hasUnsavedChanges}
//                 sx={{ marginTop: 2 }}
//             >
//                 Save
//             </Button>
//         </Box>
//     );
// };

// export default UserForm;


// import { useEffect, useState } from 'react';
// import { TextField, Button, Box, Typography, Paper } from '@mui/material';
// import { v4 as uuidv4 } from 'uuid';

// interface UserData {
//     id: string;
//     name: string;
//     address: string;
//     email: string;
//     phone: string;
// }

// const UserForm = () => {
//     const [formData, setFormData] = useState<UserData>(() => {
//         const saved = localStorage.getItem('userData');
//         return saved ? JSON.parse(saved) : { id: uuidv4(), name: '', address: '', email: '', phone: '' };
//     });

//     const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

//     useEffect(() => {
//         const handleBeforeUnload = (e: BeforeUnloadEvent) => {
//             if (hasUnsavedChanges) {
//                 e.preventDefault();
//                 e.returnValue = ''; // This will show a confirmation prompt before leaving
//             }
//         };

//         window.addEventListener('beforeunload', handleBeforeUnload);

//         return () => {
//             window.removeEventListener('beforeunload', handleBeforeUnload);
//         };
//     }, [hasUnsavedChanges]);

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault(); // Prevents the page from reloading
//         localStorage.setItem('userData', JSON.stringify(formData));
//         setHasUnsavedChanges(false);
//     };

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//         setHasUnsavedChanges(true);
//     };

//     const handleDelete = () => {
//         localStorage.removeItem('userData');
//         setFormData({ id: uuidv4(), name: '', address: '', email: '', phone: '' });
//     };

//     return (
//         <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//             <TextField
//                 label="Name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//             />
//             <TextField
//                 label="Address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//             />
//             <TextField
//                 label="Email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 type="email"
//             />
//             <TextField
//                 label="Phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 type="tel"
//                 fullWidth
//                 inputProps={{ maxLength: 10 }} // Limiting input to 10 characters
//             />
//             <Button type="submit" variant="contained" color="primary" disabled={!hasUnsavedChanges}>
//                 Save
//             </Button>

//             {formData.name && formData.address && formData.email && formData.phone && (
//                 <Paper sx={{ padding: 2, marginTop: 2 }}>
//                     <Typography variant="h6">Added Details:</Typography>
//                     <Typography>Name: {formData.name}</Typography>
//                     <Typography>Address: {formData.address}</Typography>
//                     <Typography>Email: {formData.email}</Typography>
//                     <Typography>Phone: {formData.phone}</Typography>
//                     <Button onClick={handleDelete} color="error" sx={{ marginTop: 1 }}>
//                         Delete Data
//                     </Button>
//                 </Paper>
//             )}
//         </Box>
//     );
// };

// export default UserForm;


import { useEffect, useState } from 'react';
import { TextField, Button, Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

interface UserData {
    id: string;
    name: string;
    address: string;
    email: string;
    phone: string;
}

const UserForm = () => {
    const [formData, setFormData] = useState<UserData>({
        id: uuidv4(),
        name: '',
        address: '',
        email: '',
        phone: ''
    });

    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

    const [allUserData, setAllUserData] = useState<UserData[]>(() => {
        const savedData = localStorage.getItem('userData');
        try {
            const parsedData = savedData ? JSON.parse(savedData) : [];
            return Array.isArray(parsedData) ? parsedData : []; // Ensure it's always an array
        } catch {
            return []; // In case parsing fails, return an empty array
        }
    });

    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            if (hasUnsavedChanges) {
                e.preventDefault();
                e.returnValue = ''; // Show confirmation prompt before leaving
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [hasUnsavedChanges]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page reload
        const updatedUserData = [...allUserData, formData];
        localStorage.setItem('userData', JSON.stringify(updatedUserData)); // Save all data
        setAllUserData(updatedUserData); // Update the state to display all data
        setFormData({ id: uuidv4(), name: '', address: '', email: '', phone: '' }); // Clear the form
        setHasUnsavedChanges(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setHasUnsavedChanges(true);
    };

    const handleDelete = (id: string) => {
        const filteredData = allUserData.filter((data) => data.id !== id);
        localStorage.setItem('userData', JSON.stringify(filteredData)); // Remove the selected entry
        setAllUserData(filteredData); // Update state
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: '100%',
                maxWidth: 400,
                margin: '0 auto',
                padding: 3,
                backgroundColor: '#f9f9f9',
                borderRadius: 2,
                boxShadow: 2,
            }}
        >
            <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 2 }}>
                User Data Form
            </Typography>

            <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                fullWidth
            />
            <TextField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                fullWidth
            />
            <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                type="email"
                fullWidth
            />
            <TextField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                type="tel"
                fullWidth
                inputProps={{ maxLength: 10 }} // Limit to 10 characters
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!hasUnsavedChanges}
                sx={{ marginTop: 2 }}
            >
                Save
            </Button>

            {/* Display all saved user data */}
            {allUserData.length > 0 && (
                <Box sx={{ marginTop: 3 }}>
                    <Typography variant="h6" sx={{ marginBottom: 2 }}>All User Data:</Typography>
                    <List>
                        {allUserData.map((user) => (
                            <ListItem key={user.id} sx={{ display: 'flex', flexDirection: 'column', marginBottom: 2, padding: 2, border: '1px solid #ddd', borderRadius: 2, backgroundColor: '#f9f9f9' }}>
                                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Name: {user.name}</Typography>
                                <Typography variant="body2" sx={{ marginBottom: 1 }}>Email: {user.email}</Typography>
                                <Typography variant="body2">Phone: {user.phone}</Typography>
                                <Typography variant="body2">Address: {user.address}</Typography>
                                <Button
                                    color="error"
                                    onClick={() => handleDelete(user.id)}
                                    sx={{ alignSelf: 'center', minWidth: 30, marginTop: 2 }}
                                >
                                    Delete
                                </Button>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            )}
        </Box>
    );
};

export default UserForm;
