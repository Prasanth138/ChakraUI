import { FormControl,FormLabel,Input,Textarea,Select,Checkbox,Radio,Stack,Button,ChakraProvider,RadioGroup} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

function MyForm() {
  const {register,formState: { errors },handleSubmit} = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" type="text" {...register("name", { required: true, maxLength: 80 })}
              placeholder="Enter your name" size="md" aria-invalid={errors.name ? "true" : "false"} />
            {errors.name?.type === "required" && (<p role="alert">Name is required</p>)}
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" type="email" {...register("email", {required: "Email Address is required",pattern: /^\S+@\S+$/i})}
              placeholder="Enter your email" size="md" aria-invalid={errors.email ? "true" : "false"}/>
            {errors.email && <p role="alert">{errors.email?.message}</p>}
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea id="message" {...register("message", {required: "Enter Your Message",maxLength: 250})}
              placeholder="Enter your message" size="md" aria-invalid={errors.message ? "true" : "false"} />
            {errors.message && <p role="alert">{errors.message?.message}</p>}
          </FormControl>

          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup id="gender">
              <Radio value="Male"{...register("gender", {required: true})} aria-invalid={errors.gender?"true":"false"}>Male</Radio>
              <Radio value="Female"{...register("gender",{required:true})} aria-invalid={errors.gender?"true":"false"}>Female</Radio>
            </RadioGroup>
            {errors.gender && <p role="alert">{errors.gender?.message}</p>}
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="country">Country</FormLabel>
            <Select  id="country" {...register("country", { required: "Select Any Country" })}
              aria-invalid={errors.country ? "true" : "false"}>
              <option value="">Select a country</option>
              <option value="india">India</option>
              <option value="us">US</option>
              <option value="uk">UK</option>
            </Select>
            {errors.country && <p role="alert">{errors.country?.message}</p>}
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="phone">Phone</FormLabel>
            <Input id="phone" type="tel" {...register("phone", {required: "Enter Your Phone Number", minLength: 10,maxLength: 10})}
              placeholder="Enter your phone number" size="md" aria-invalid={errors.phone ? "true" : "false"}/>
            {errors.phone && <p role="alert">{errors.phone?.message}</p>}
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="date">Date of Birth</FormLabel>
            <Input id="date" type="date" {...register("date", { required: "Enter Your Date of Birth" })}
              size="md" aria-invalid={errors.date ? "true" : "false"} />
            {errors.date && <p role="alert">{errors.date?.message}</p>}
          </FormControl>

          <FormControl>
            <Checkbox id="isAgreed" {...register("isAgreed", {required: "Select the Agree to continue"})}
              aria-invalid={errors.isAgreed ? "true" : "false"}>
              I agreed to the terms and conditions
            </Checkbox>
            {errors.isAgreed && <p role="alert">{errors.isAgreed?.message}</p>}
          </FormControl>

          <Button type="submit" variantColor="blue" mt={4}>
            Save
          </Button>
        </Stack>
      </form>
    </ChakraProvider>
  );
}

export default MyForm;

// import {
//   FormControl,
//   FormLabel,
//   Input,
//   Textarea,
//   Select,
//   Checkbox,
//   Radio,
//   Stack,
//   Button,
//   ChakraProvider,
// } from "@chakra-ui/react";
// import { useState } from "react";
// import { useForm } from "react-hook-form";

// function MyForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     gender: "",
//     country: "",
//     phone: "",
//     date: "",
//     isAgreed: false,
//   });
//   const {register} = useForm();

//   const handleChange = (event) => {
//     const { name, value, type, checked } = event.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <ChakraProvider>
//       <form onSubmit={handleSubmit}>
//         <Stack spacing={3}>
//           <FormControl>
//             <FormLabel htmlFor="name">Name</FormLabel>
//             <Input
//               id="name"
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               size="md"
//               required
//             />
//           </FormControl>

//           <FormControl>
//             <FormLabel htmlFor="email">Email</FormLabel>
//             <Input
//               id="email"
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               size="md"
//               required
//             />
//           </FormControl>

//           <FormControl>
//             <FormLabel htmlFor="message">Message</FormLabel>
//             <Textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Enter your message"
//               size="md"
//             />
//           </FormControl>

//           <FormControl>
//             <FormLabel>Gender</FormLabel>
//             <Radio
//               value="male"
//               name="gender"
//               id="male"
//               onChange={handleChange}
//               isChecked={formData.gender === "male"}
//             >
//               Male
//             </Radio>
//             <Radio
//               value="female"
//               name="gender"
//               id="female"
//               onChange={handleChange}
//               isChecked={formData.gender === "female"}
//             >
//               Female
//             </Radio>
//           </FormControl>

//           <FormControl>
//             <FormLabel htmlFor="country">Country</FormLabel>
//             <Select id="country" name="country" onChange={handleChange}>
//               <option value="">Select a country</option>
//               <option value="india">India</option>
//               <option value="us">US</option>
//               <option value="uk">UK</option>
//             </Select>
//           </FormControl>

//           <FormControl>
//             <FormLabel htmlFor="phone">Phone</FormLabel>
//             <Input
//               id="phone"
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Enter your phone number"
//               size="md"
//               required
//             />
//           </FormControl>

//           <FormControl>
//             <FormLabel htmlFor="date">Date</FormLabel>
//             <Input
//               id="date"
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               size="md"
//             />
//           </FormControl>

//           <FormControl>
//             <Checkbox
//               id="isAgreed"
//               name="isAgreed"
//               onChange={handleChange}
//               isChecked={formData.isAgreed}
//             >
//               I agreed to the terms and conditions
//             </Checkbox>
//           </FormControl>

//           <Button type="submit" variantColor="blue" mt={4}>
//             Save
//           </Button>
//         </Stack>
//       </form>
//     </ChakraProvider>
//   );
// }

// export default MyForm;
