'use client'

import * as actions from "@/actions";
import { Button, Input, Popover, PopoverContent, PopoverTrigger, Textarea } from '@nextui-org/react';
import { error } from 'console';
import { useFormState } from 'react-dom';
import FormButton from '../common/form-button';


export default function TopicCreateForm() {
  const [formState, action] = useFormState(actions.createTopic,  {
    errors: { }
  })

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>
            <Input 
              name="name" 
              label="Name" 
              labelPlacement="outside" 
              placeholder="Name"
              errorMessage={formState.errors.name?.join(', ')}
              isInvalid={!!formState.errors.name}
               />
            <div className="bg-red-400">
            {formState.errors.name?.join(', ')}
            </div>
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Description your topic"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(', ')}
            />

            {formState.errors._form ? 
             (<div className='rounded p-2 bg-red-200 border border-red-400'>{formState.errors._form?.join(', ')}</div>) 
             : null }
            <FormButton>
              Save
            </FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}