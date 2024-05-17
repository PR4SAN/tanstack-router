import {createFileRoute, Link, useNavigate} from "@tanstack/react-router";
import {FieldApi, useForm} from "@tanstack/react-form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {signIn} from 'aws-amplify/auth'
import {zodValidator} from '@tanstack/zod-form-adapter';
import { z } from 'zod'
import {useEffect, useState} from "react";
import { useToast } from "@/components/ui/use-toast"
import {useMutation} from "@tanstack/react-query";
import {cn} from "@/lib/utils.ts";


export const Route = createFileRoute("/login")({
  component: LoginComponent,
});

function LoginComponent() {

  return (
   <div>
    this is login
   </div>
  );
}