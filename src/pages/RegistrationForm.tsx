import {useForm} from 'react-hook-form';
import { Button, Typography, TextField, Stack, FormControl, InputLabel, Select, MenuItem, Box, Paper } from '@mui/material';
import { registerUser } from '../services/api';
import NumberField from '../components/NumberField';
import { useNavigate } from 'react-router-dom';




const RegisterForm = () => {

    const navigate = useNavigate()

    const defaultValues = {
        firstname: "",
        lastname: "",
        email: "",
        profession: "",
        role: "CLIENT",
        password: "",
        confirmPassword: "",
        yearsOfExperience:0,
        description:""
    };


    const form = useForm<typeof defaultValues>({
        defaultValues: defaultValues,
        shouldUnregister: true
    });

    const { handleSubmit, formState, register, watch, setError } = form;
    const { errors, isSubmitting } = formState;

    // On surveille le mot de passe pour la comparaison
    const passwordValue = watch("password");
    const roleSelected= watch("role")
    
    const isProvider = roleSelected === "PROVIDER";

    const handleFormSubmit = async (data:typeof defaultValues) => {
        try {
            const user = await registerUser(data);
            navigate("/login")
        } 
        catch (error: any) {
            console.log(error)
           const serverErrors = error.response?.data;

           console.log(serverErrors)
        }
    };

    return (
        <Box component={"main"} sx={{height:"100%", width:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", bgcolor:"primary.light"}}>
            <Paper sx={{width:500, px:8, py:4, my:4}}>
                <Typography variant='h6' textAlign={"center"} gutterBottom>Registration</Typography>
                
                <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
                    <Stack spacing={4}>
                    
                        <TextField 
                            fullWidth
                            label="Firstname" 
                            size='small'
                            {...register("firstname", { required: "Firstname is required" })}
                            error={!!errors.firstname}
                            helperText={errors.firstname?.message}
                        />
                        <TextField 
                            fullWidth
                            label="Lastname" 
                            size='small'
                            {...register("lastname", { required: "Lastanme is required" })}
                            error={!!errors.firstname}
                            helperText={errors.firstname?.message}
                        />

                        
                        <TextField 
                            fullWidth
                            label="Email" 
                            size='small'
                            {...register("email", { 
                                required: "The email is required",
                                pattern: { value: /^\S+@\S+$/i, message: "Email is not valid" }
                            })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                    
                        <FormControl fullWidth error={!!errors.role}>
                            <InputLabel>Register As</InputLabel>
                            <Select
                            label="Register as"
                            defaultValue="CLIENT"
                            {...register("role")}
                            >
                                <MenuItem value="CLIENT">Client</MenuItem>
                                <MenuItem value="PROVIDER">Provider</MenuItem>
                            </Select>
                        </FormControl>

                        {isProvider && <TextField 
                            fullWidth
                            label="Profession" 
                            size='small'
                            {...register("profession", { required: "You have to put your profession" })}
                            error={!!errors.profession}
                            helperText={errors.profession?.message}
                        />}
                        {isProvider && <NumberField label="Years Of Experiences" min={0} max={10} {...register("yearsOfExperience",{
                            valueAsNumber:true,
                            required:{
                                value:true,
                                message:"You have to inform your years experiences"
                            }
                        })} error={!!errors.yearsOfExperience} helperText={errors.yearsOfExperience?.message}/>}
                        {isProvider && <TextField
                            id="outlined-multiline-flexible"
                            label="Description about you"
                            multiline
                            maxRows={4}
                            {...register("description",{
                                required:{
                                    value:true,
                                    message:"You have to give a description about you and your work"
                                }
                            })}

                            error={!!errors.description} helperText={errors.description?.message}
                        />}
                        
                        
                        <TextField 
                            fullWidth
                            type='password'
                            label="Password" 
                            size='small'
                            {...register("password", { required: "The password is required", minLength: { value: 6, message: "Password size should be at least 6 characters." }})}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />

                        <TextField 
                            fullWidth
                            type='password'
                            label="Confirm Password" 
                            size='small'
                            {...register("confirmPassword", { 
                                required: "Confirm the password",
                                validate: (value) => value === passwordValue || "Password is not well confirmed"
                            })}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword?.message}
                        />
                        
                        <Button 
                            disabled={isSubmitting}
                            type='submit' 
                            variant='contained' 
                            color='primary'
                        >
                            {isSubmitting ? "Loading..." : "Register"}
                        </Button>

                    </Stack>
                </form>
            </Paper>
        </Box>
    );
}

export default RegisterForm