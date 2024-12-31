import { type NextRequest, NextResponse } from "next/server";
import prisma from "@lib/prisma";
import { createValidation, todosValidation, updateVaidation } from "../validation/todosValidation";
import { ValidationError } from "yup";

enum DEFAULT_PAGINATION {
  PAGE = 1,
  LIMIT = 10,
}

export async function getTodos(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = +(searchParams.get("page") || DEFAULT_PAGINATION.PAGE);
    const limit = +(searchParams.get("limit") || DEFAULT_PAGINATION.LIMIT);
    const findOptions = {
      skip: isNaN(page) || page <= 0 ? 0 : (page - 1) * limit,
      take: isNaN(limit) || limit <= 0 ? 10 : limit,
    };

    const todos = await prisma.todo.findMany(findOptions);
    return NextResponse.json({ todos });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

export async function createTodo(request: NextRequest) {
  try {
    const todo = await todosValidation(createValidation).validate(await request.json());
    const newTodo = await prisma.todo.create({ data: todo });

    return NextResponse.json({ todo: newTodo }, { status: 201 });
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json(error, { status: 400 });
  }
}

export async function getTodoById(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    if (!id) throw new Error("ID is required");

    const todo = await prisma.todo.findFirst({ where: { id } });
    if (!todo) throw new Error("Todo not found");

    return NextResponse.json({ todo }, { status: todo ? 200 : 404 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function updateTodoById(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    if (!id) throw new Error("ID is required");
    console.log(id);

    const todo = await todosValidation(updateVaidation).validate(await request.json());
    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: todo,
    });

    return NextResponse.json({ todo: updatedTodo });
  } catch (error) {
    if(error instanceof ValidationError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    console.dir(error);
    return NextResponse.error();
  }
}

export async function deleteTodoById(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    if (!id) throw new Error("ID is required");

    const todo = await prisma.todo.delete({ where: { id } });

    return NextResponse.json({ todo });
  } catch (error) {
    console.dir(error);
    return NextResponse.error();
  }
}
